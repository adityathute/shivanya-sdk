import { forwardRef, useMemo, useState } from "react";
import { CloseIcon } from "../../../icons";
import type { AutocompleteProps } from "./Autocomplete.types";

export const Autocomplete = forwardRef<
  HTMLInputElement,
  AutocompleteProps
>(function Autocomplete(
  {
    data = [],
    size = "md",
    fullWidth,
    clearable,
    value,
    defaultValue = "",
    onChange,
    onSelectOption,
    className,
    ...props
  },
  ref,
) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  const [open, setOpen] = useState(false);

  const options = useMemo(
    () =>
      data.filter((option: string) =>
        option.toLowerCase().includes(current.toLowerCase()),
      ),
    [data, current],
  );

  const classes = [
    "shivanya-autocomplete",
    `shivanya-autocomplete-${size}`,
    fullWidth ? "is-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="shivanya-autocomplete-control">
        <input
          {...props}
          ref={ref}
          value={current}
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            if (value === undefined) {
              setInternal(event.target.value);
            }

            setOpen(true);
            onChange?.(event);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
        />

        {clearable && current && (
          <button
            type="button"
            className="shivanya-autocomplete-clear"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              if (value === undefined) {
                setInternal("");
              }

              setOpen(false);
            }}
            aria-label="Clear"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {open && options.length > 0 && (
        <div
          className="shivanya-autocomplete-list"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                if (value === undefined) {
                  setInternal(option);
                }

                onSelectOption?.(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

Autocomplete.displayName = "Autocomplete";