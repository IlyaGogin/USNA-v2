import { useState, useRef, useEffect } from 'react';

interface InlineEditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
}

export function InlineEditableText({ 
  value, 
  onChange, 
  className = '', 
  placeholder = 'Click to edit...',
  multiline = false 
}: InlineEditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Move cursor to end
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      inputRef.current?.blur();
    }
    if (e.key === 'Escape') {
      onChange(value); // Reset to original value
      inputRef.current?.blur();
    }
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`outline-none bg-[rgba(81,46,171,0.08)] rounded-[4px] px-[4px] py-[2px] -mx-[4px] -my-[2px] resize-none w-full ${className}`}
          rows={3}
        />
      );
    }
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`outline-none bg-[rgba(81,46,171,0.08)] rounded-[4px] px-[4px] py-[2px] -mx-[4px] -my-[2px] w-full ${className}`}
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`cursor-text hover:bg-[rgba(81,46,171,0.04)] rounded-[4px] px-[4px] py-[2px] -mx-[4px] -my-[2px] transition-colors ${className}`}
    >
      {value || <span className="text-[#9ca3af]">{placeholder}</span>}
    </div>
  );
}