import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, File } from "formidable";
import path from "path";
import fs from "fs";

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function uploadFileMiddleware(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const uploadDir = path.join(process.cwd(), "public/uploads");

    const form = new IncomingForm({
      uploadDir: uploadDir,
      keepExtensions: true,
    });
    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        // Handle multiple files
        const filesArray = Array.isArray(files.file)
          ? files.file
          : [files.file];
        if (!filesArray || filesArray.length === 0) {
          reject(new Error("No files uploaded"));
          return;
        }

        const fileNames: string[] = [];

        // Process each file
        await Promise.all(
          filesArray.map(async (file: File | undefined) => {
            if (file) {
              const newFilePath = path.join(uploadDir, file.newFilename);

              await fs.promises.rename(file.filepath, newFilePath);
              fileNames.push(file.originalFilename as string);
            }
          })
        );

        resolve(
          res
            .status(200)
            .json({ message: "Files uploaded successfully", fileNames })
        );
      });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
