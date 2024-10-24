import { NextRequest, NextResponse } from "next/server";
import formidable, { File } from "formidable";
import fs from "fs-extra";
import path from "path";
import { IncomingMessage } from "http";
import { Readable } from "stream";

const uploadDir = path.join(process.cwd(), "public", "uploads");
fs.ensureDirSync(uploadDir);

const form = formidable({
  multiples: true, // Enable multiple file uploads
  uploadDir: uploadDir, // Directory where files will be stored
  keepExtensions: true, // Keep the file extension
});

async function parseForm(req: IncomingMessage) {
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    }
  );
}

// Convert Next.js NextRequest body (ReadableStream) to Buffer
async function streamToBuffer(
  stream: ReadableStream<Uint8Array>
): Promise<Buffer> {
  const reader = stream.getReader();
  let result = new Uint8Array(0);

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const newResult = new Uint8Array(result.length + value.length);
    newResult.set(result);
    newResult.set(value, result.length);
    result = newResult;
  }

  return Buffer.from(result);
}

async function convertNextRequestToIncomingMessage(
  req: NextRequest
): Promise<IncomingMessage> {
  const bodyBuffer = await streamToBuffer(
    req.body as ReadableStream<Uint8Array>
  );
  const incomingMessage = new Readable() as IncomingMessage;

  incomingMessage._read = () => {};
  incomingMessage.push(bodyBuffer);
  incomingMessage.push(null);

  // Assign headers and method from the NextRequest
  incomingMessage.headers = Object.fromEntries(req.headers);
  incomingMessage.method = req.method;

  return incomingMessage;
}

export async function midd(req: NextRequest) {
  try {
    const incomingReq = await convertNextRequestToIncomingMessage(req);
    const { fields, files } = await parseForm(incomingReq);
    const fileArray: File[] = [];

    // Iterate through all keys in the files object
    Object.values(files).forEach((file) => {
      if (Array.isArray(file)) {
        fileArray.push(...file); // Add all files if it's an array
      } else if (file) {
        fileArray.push(file); // Add the single file
      }
    });
    const fileInfos = fileArray
      .filter((file): file is File => file !== undefined)
      .map((file) => ({
        originalName: file.originalFilename,
        savedAs: file.newFilename,
        path: file.filepath,
      }));
    return { files: fileInfos, fields: fields };
  } catch (error) {
    return { error: "File upload failed" };
  }
}
