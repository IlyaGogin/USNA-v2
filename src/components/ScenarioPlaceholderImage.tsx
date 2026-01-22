type ScenarioPlaceholderImageProps = {
  title: string;
  className?: string;
};

/**
 * Placeholder image component for scenarios without Figma assets.
 * Uses design system specs: #E8E6F3 background, white text, centered.
 * Supports 288x180 aspect ratio (1.6:1) with border-radius rounded-[8px].
 */
export default function ScenarioPlaceholderImage({
  title,
  className = "",
}: ScenarioPlaceholderImageProps) {
  return (
    <div
      className={`bg-[#E8E6F3] flex items-center justify-center rounded-[8px] aspect-[288/180] ${className}`}
    >
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-white text-[14px] leading-[20px] text-center px-[16px] line-clamp-3">
        {title}
      </p>
    </div>
  );
}
