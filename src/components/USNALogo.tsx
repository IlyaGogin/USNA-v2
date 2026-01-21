import imgUSNALogo from "figma:asset/5b148ddb4e6c9d9e3ff7c305d285c5ac163f63a5.png";

export function USNALogo() {
  return (
    <div className="w-full flex items-center justify-center px-3">
      <img 
        alt="USNA Logo" 
        className="w-full h-auto object-contain" 
        src={imgUSNALogo} 
      />
    </div>
  );
}