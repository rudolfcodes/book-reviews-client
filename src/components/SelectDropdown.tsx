import React, { useEffect, useState, useRef, useCallback } from "react";
import BaseButton from "./buttons/BaseButton";
import ChevronDownIcon from "./icons/ChevronDown";
import ChevronUpIcon from "./icons/ChevronUp";
import FlexContainer from "./FlexContainer";
import DropdownMenu from "./DropdownMenu";
import useOutsideClick from "@/hooks/useOutsideClick";

export interface DropdownItem {
  id: string;
  name: string;
  imageUrl?: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  data: DropdownItem[];
  position:
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-full-left-0";
  hasImage?: boolean;
  selectedId?: string;
  onSelect: (selectedItem: DropdownItem) => void;
}

const SelectDropdown = ({
  id,
  title = "Select",
  data,
  position = "top-left",
  hasImage,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(
    selectedId ? data.find((item) => item.id === selectedId) || null : null
  );

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const handleChange = useCallback(
    (item: DropdownItem) => {
      setSelectedItem(item);
      onSelect(item);
      setIsOpen(false);
    },
    [onSelect]
  );

  useEffect(() => {
    if (selectedId && data.length > 0) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(null);
    }
  }, [selectedId, data]);

  return (
    <div ref={dropdownRef} className="relative">
      <BaseButton
        id={id}
        className="flex justify-between items-center gap-5 rounded w-full py-2 px-4 bg-white font-openSans text-base font-semibold text-input-color border-border-grey"
        type="button"
        ariaLabel={title}
        ariaHasPopup={isOpen}
        ariaExpanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedItem ? selectedItem.name : title}</span>
        <FlexContainer className="flex flex-col ml-4 gap-2">
          <ChevronUpIcon />
          <ChevronDownIcon />
        </FlexContainer>
      </BaseButton>

      {isOpen && (
        <DropdownMenu
          data={data}
          handleChange={handleChange}
          ariaLabel={title}
          ariaOrientation="vertical"
          position={position}
          id={id}
          className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg"
          hasImage={hasImage}
          selectedId={selectedItem ? selectedItem.id : undefined}
        />
      )}
    </div>
  );
};

export default SelectDropdown;
