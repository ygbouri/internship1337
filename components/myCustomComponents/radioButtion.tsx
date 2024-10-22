import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDarkMode } from "@/config/darkmode";
import { caraSousCateRequired, filterCara } from "@/types/Api";

export function RadioGroupDemo(props: {
  cara: caraSousCateRequired[] | undefined;
  onSelect: Function;
  isSelected: filterCara | undefined;
}) {
  const { cara, onSelect, isSelected } = props;
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  let color: string = isDarkMode ? "text-black" : "text-[#BBBBBC]";
  const map = new Map<
    string,
    { id_caracteristique: string; value: string[] }
  >();
  const convertToMap = (cara: caraSousCateRequired[]) => {
    cara.forEach((item: caraSousCateRequired) => {
      if (map.has(item.name)) {
        map.get(item.name)?.value.push(item.value);
      } else {
        map.set(item.name, {
          id_caracteristique: item.id_caracteristique,
          value: [item.value],
        });
      }
    });
  };
  convertToMap(cara ? cara : []);
  return (
    <div className="flex flex-col items-center space-x-2">
      {Array.from(map.entries()).map(([nameC, values], index: number) => (
        <div
          key={nameC}
          className={`w-full flex items-start  rounded-tl-md rounded-tr-md flex-col gap-2 justify-around ${
            isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
          }`}
        >
          <div className="w-[50%] flex gap-2 ">
            <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
              {nameC.toLocaleUpperCase()}
            </h1>
          </div>

          <div className="w-full flex flex-col ml-6 gap-2 ">
            {values.value.map((item: string, index: number) => (
              <div key={index} className={`flex items-center space-x-2`}>
                <RadioGroup>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item}
                      id={item}
                      checked={
                        nameC === isSelected?.name && isSelected?.value === item
                      }
                    />
                    <Label htmlFor={item}>{item}</Label>
                  </div>
                </RadioGroup>
                {/* <label
                  htmlFor={item}
                  className={`text-sm ${color} font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                >
                  {item}
                </label> */}
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
        {}
      </h1> */}
      {/* <Checkbox
        id={parametre.id}
        onCheckedChange={onSelect}
        checked={isSelected}
        color={"#855ADF"}
      />
      <label
        htmlFor={parametre.item}
        className={`text-sm ${color} font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
      >
        {parametre.name}
      </label> */}
    </div>
  );
}

{
  /* <div className="flex items-center space-x-2">
<RadioGroupItem value="comfortable" id="r2" />
<Label htmlFor="r2">Comfortable</Label>
</div>
<div className="flex items-center space-x-2">
<RadioGroupItem value="compact" id="r3" />
<Label htmlFor="r3">Compact</Label>
</div> */
}
