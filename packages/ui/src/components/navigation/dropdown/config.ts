export const dropdownSizes={xs:"dropdownExtraSmall",sm:"dropdownSmall",md:"dropdownMedium",lg:"dropdownLarge",xl:"dropdownExtraLarge"} as const;
export const dropdownVariants={default:"dropdownDefault",bordered:"dropdownBordered",filled:"dropdownFilled",ghost:"dropdownGhost"} as const;
export const dropdownRadius={none:"dropdownRadiusNone",sm:"dropdownRadiusSmall",md:"dropdownRadiusMedium",lg:"dropdownRadiusLarge",full:"dropdownRadiusFull"} as const;
export const dropdownPlacements={bottom:"dropdownBottom",bottomStart:"dropdownBottomStart",bottomEnd:"dropdownBottomEnd",top:"dropdownTop",topStart:"dropdownTopStart",topEnd:"dropdownTopEnd",left:"dropdownLeft",right:"dropdownRight"} as const;
export const dropdownItemPositions={start:"dropdownItemStart",center:"dropdownItemCenter",end:"dropdownItemEnd"} as const;
export const dropdownStates={default:"dropdownDefaultState",loading:"dropdownLoading",disabled:"dropdownDisabled"} as const;
export const dropdownDefaultProps={size:"md",variant:"default",radius:"md",placement:"bottomStart",state:"default",itemPosition:"start",defaultOpen:false,open:undefined,disabled:false,closeOnSelect:true,closeOnEscape:true,closeOnOutsideClick:true} as const;
export type DropdownSize=keyof typeof dropdownSizes; export type DropdownVariant=keyof typeof dropdownVariants; export type DropdownRadius=keyof typeof dropdownRadius; export type DropdownPlacement=keyof typeof dropdownPlacements; export type DropdownItemPosition=keyof typeof dropdownItemPositions; export type DropdownState=keyof typeof dropdownStates;
