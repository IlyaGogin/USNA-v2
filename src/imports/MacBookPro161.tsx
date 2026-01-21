import svgPaths from "./svg-o3us9zjd2h";
import imgRectangle12176 from "figma:asset/0e3db8b552e590f35d1759c8409b494ff9886201.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame6 from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";

function MaskGroup() {
  return (
    <div className="absolute contents left-[112px] top-[47px]" data-name="Mask group">
      <div className="absolute bg-white h-[49px] left-[110px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2px] mask-size-[140px_46px] top-[45px] w-[143px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[20px] top-[24px]">
      <div className="absolute left-[20px] size-[88px] top-[24px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <MaskGroup />
    </div>
  );
}

function Trim() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
      <Trim />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[24px] px-[20px] py-[12px] rounded-[1000px] top-[131px] w-[253px]" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[16px]">Create Scenario</p>
      </div>
      <TrailIcon />
    </div>
  );
}

function Underline() {
  return (
    <div className="bg-[#fcc32a] h-[4px] relative shrink-0 w-full" data-name="Underline">
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function TabsItemBorder() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative w-[44px]" data-name="_tabs-item-border">
      <Underline />
    </div>
  );
}

function Books() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Books">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Books">
          <path d={svgPaths.p30e35700} fill="var(--fill-0, #FCC32A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
      <Books />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">SCENARIOS</p>
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <TabLabel />
        </div>
      </div>
    </div>
  );
}

function TabsVertical() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-[4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[270deg] scale-y-[-100%]">
            <TabsItemBorder />
          </div>
        </div>
      </div>
      <Label />
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ChartBar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ChartBar">
          <path d={svgPaths.p3cf02090} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
      <ChartBar />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">REPORTS</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TabLabel1 />
        </div>
      </div>
    </div>
  );
}

function TabsVertical1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
      <Label1 />
    </div>
  );
}

function ChartLine() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ChartLine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ChartLine">
          <path d={svgPaths.p6e42a00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
      <ChartLine />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">INSIGHTS</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TabLabel2 />
        </div>
      </div>
    </div>
  );
}

function TabsVertical2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
      <Label2 />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Users">
          <path d={svgPaths.p82d3500} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
      <Users />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">ADMIN</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TabLabel3 />
        </div>
      </div>
    </div>
  );
}

function TabsVertical3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
      <Label3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[203px] w-[165px]">
      <TabsVertical />
      <TabsVertical1 />
      <TabsVertical2 />
      <TabsVertical3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#1d5282] h-[1117px] left-0 overflow-clip top-0 w-[301px]">
      <Group />
      <Button />
      <Frame12 />
    </div>
  );
}

function Trim1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim1 />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper />
      <Label4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic1() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Hard: 5/5</p>
      </div>
    </div>
  );
}

function LabelStatic2() {
  return (
    <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic />
      <LabelStatic1 />
      <LabelStatic2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame57 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame8 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame4 />
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Trim2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim2 />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot1 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic3() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper1 />
      <Label7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic4() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#806700] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Intermediate: 3/5</p>
      </div>
    </div>
  );
}

function LabelStatic5() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic3 />
      <LabelStatic4 />
      <LabelStatic5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame15 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame14 />
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Trim3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim3 />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot2 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic6() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper2 />
      <Label10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic7() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label11 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Hard</p>
      </div>
    </div>
  );
}

function LabelStatic8() {
  return (
    <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label12 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic6 />
      <LabelStatic7 />
      <LabelStatic8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame59 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame20 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame19 />
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame7 />
      <Frame17 />
      <Frame1 />
    </div>
  );
}

function Trim4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim4 />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot3 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic9() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper3 />
      <Label13 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic10() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label14 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#006632] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Easy: 1/5</p>
      </div>
    </div>
  );
}

function LabelStatic11() {
  return (
    <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label15 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic9 />
      <LabelStatic10 />
      <LabelStatic11 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame24 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame23 />
        <Frame25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Trim5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim5 />
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot4 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic12() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper4 />
      <Label16 />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic13() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label17 />
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Hard: 5/5</p>
      </div>
    </div>
  );
}

function LabelStatic14() {
  return (
    <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label18 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic12 />
      <LabelStatic13 />
      <LabelStatic14 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame29 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame28 />
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Trim6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim6 />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot5 />
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic15() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper5 />
      <Label19 />
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic16() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label20 />
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#806700] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Intermediate: 3/5</p>
      </div>
    </div>
  );
}

function LabelStatic17() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label21 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic15 />
      <LabelStatic16 />
      <LabelStatic17 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame34 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame33 />
        <Frame35 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame26 />
      <Frame31 />
      <Frame36 />
    </div>
  );
}

function Trim7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim7 />
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot6 />
    </div>
  );
}

function Label22() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic18() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper6 />
      <Label22 />
    </div>
  );
}

function Label23() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic19() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label23 />
    </div>
  );
}

function Label24() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#806700] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Intermediate: 3/5</p>
      </div>
    </div>
  );
}

function LabelStatic20() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label24 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic18 />
      <LabelStatic19 />
      <LabelStatic20 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame39 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame38 />
        <Frame40 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Trim8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim8 />
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot7 />
    </div>
  );
}

function Label25() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic21() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper7 />
      <Label25 />
    </div>
  );
}

function Label26() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic22() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label26 />
    </div>
  );
}

function Label27() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#006632] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Easy: 1/5</p>
      </div>
    </div>
  );
}

function LabelStatic23() {
  return (
    <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label27 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic21 />
      <LabelStatic22 />
      <LabelStatic23 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame44 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame43 />
        <Frame45 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Trim9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <circle cx="8" cy="8" fill="var(--fill-0, #512EAB)" id="icon" r="3" />
        </g>
      </svg>
    </div>
  );
}

function BulletsDot8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
      <Trim9 />
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
      <BulletsDot8 />
    </div>
  );
}

function Label28() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">PUBLISHED</p>
      </div>
    </div>
  );
}

function LabelStatic24() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <IconWrapper8 />
      <Label28 />
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">NE-203</p>
      </div>
    </div>
  );
}

function LabelStatic25() {
  return (
    <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label29 />
    </div>
  );
}

function Label30() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Hard: 5/5</p>
      </div>
    </div>
  );
}

function LabelStatic26() {
  return (
    <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
      <Label30 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LabelStatic24 />
      <LabelStatic25 />
      <LabelStatic26 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[159px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ede2e2] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[24px] relative size-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#171717] w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Command Climate - Reporting Misconduct</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">Navigate ethical obligations when discovering potential misconduct by a peer officer who is also a friend.</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame65 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Frame49 />
          <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[444px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame48 />
        <Frame50 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame41 />
      <Frame46 />
      <Frame51 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[333px] top-[260px] w-[1363px]">
      <Frame3 />
      <Frame13 />
      <Frame52 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="absolute left-0 size-[48px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #153C60)" id="Ellipse 1" r="24" />
        </svg>
      </div>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] w-full">Charlie Mitchell</p>
      <p className="leading-[14px] relative shrink-0 text-[#fcc32a] text-[12px] w-full">charlie.mitchell2@pearson.com</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[1045px] w-[253px]">
      <Frame56 />
      <Frame53 />
    </div>
  );
}

function Trim10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p1626e300} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ControlsSearch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="controls/search">
      <Trim10 />
    </div>
  );
}

function ControlWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="control-wrapper">
      <ControlsSearch />
    </div>
  );
}

function InputComboboxAction() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="_input-combobox-action">
      <ControlWrapper />
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Search...</p>
          <InputComboboxAction />
        </div>
      </div>
    </div>
  );
}

function InputSearch() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-search">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Input />
      </div>
    </div>
  );
}

function Trim11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function DropdownCollapseIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
      <Trim11 />
    </div>
  );
}

function DropdownIndicator() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
      <DropdownCollapseIcon />
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Course</p>
          <DropdownIndicator />
        </div>
      </div>
    </div>
  );
}

function InputMultiSelectField() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="_input-multi-select-field">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Input1 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <InputMultiSelectField />
    </div>
  );
}

function InputMultiSelect() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="input-multi-select">
      <Frame2 />
    </div>
  );
}

function Trim12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function DropdownCollapseIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
      <Trim12 />
    </div>
  );
}

function DropdownIndicator1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
      <DropdownCollapseIcon1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Status</p>
          <DropdownIndicator1 />
        </div>
      </div>
    </div>
  );
}

function InputMultiSelectField1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="_input-multi-select-field">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Input2 />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <InputMultiSelectField1 />
    </div>
  );
}

function InputMultiSelect1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="input-multi-select">
      <Frame55 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[333px] top-[156px] w-[1363px]">
      <InputSearch />
      <InputMultiSelect />
      <InputMultiSelect1 />
    </div>
  );
}

function Trim13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
      <Trim13 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center left-[1496px] px-[24px] py-[16px] rounded-[1000px] top-[40px]" data-name="button">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create Scenario</p>
      <TrailIcon1 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#f6f6fb] relative size-full" data-name="MacBook Pro 16' - 1">
      <Frame />
      <Frame11 />
      <Frame54 />
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-[333px] text-[#171717] text-[32px] top-[44px] tracking-[-0.64px] w-[302px]">Welcome, Charlie</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[333px] text-[#5d5d5d] text-[16px] text-nowrap top-[96px]">Create and manage leadership and ethics scenarios aligned to course objectives</p>
      <Frame9 />
      <Button1 />
    </div>
  );
}