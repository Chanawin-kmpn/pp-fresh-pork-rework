import { ProductFilterProps } from "@/types/types";
import React from "react";

import { Checkbox } from "../ui/checkbox";

const DesktopFIlter: React.FC<ProductFilterProps> = ({
  categories,
  selectedTypes,
  handleTypeChange,
}) => {
  return (
    <div className="hidden lg:block">
      {Object.entries(categories).map(([category, types]) => (
        <div key={category} className="mb-4">
          <p className="text-medium-bold mb-2">{category}</p>
          <div className="space-y-2">
            {types.map((type: string) => (
              <div key={type}>
                <label
                  htmlFor={type}
                  className="text-normal flex items-center gap-2"
                >
                  <Checkbox
                    id={type}
                    checked={selectedTypes === type}
                    onCheckedChange={() => handleTypeChange!(type)}
                    aria-label={`${type} filter`}
                  />
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopFIlter;
