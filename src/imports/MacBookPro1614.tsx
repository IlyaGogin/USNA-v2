import svgPaths from "./svg-86qsn8ylsi";
import imgRectangle12176 from "figma:asset/0e3db8b552e590f35d1759c8409b494ff9886201.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

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

function Frame4() {
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
      <Frame4 />
    </div>
  );
}

function Frame36() {
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

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] w-full">Charlie Mitchell</p>
      <p className="leading-[14px] relative shrink-0 text-[#fcc32a] text-[12px] w-full">charlie.mitchell2@pearson.com</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[1045px] w-[253px]">
      <Frame36 />
      <Frame3 />
    </div>
  );
}

function Trim1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
      <Trim1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button1 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New scenario</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Cancel</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Save scenario</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[333px] px-0 py-[40px] top-0 w-[1363px]">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Information</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Give this training scenario a name and assign any tags. Tags allow you to assign scenarios to specific cohorts or leadership development tracks.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Name*</p>
        </div>
      </div>
    </div>
  );
}

function InputTextLineField() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="_input_text_line_field">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Input />
      </div>
    </div>
  );
}

function InputTextLine() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-text-line">
      <InputTextLineField />
    </div>
  );
}

function Trim2() {
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
      <Trim2 />
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
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Tags</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <InputMultiSelectField />
    </div>
  );
}

function InputMultiSelect() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-multi-select">
      <Frame1 />
    </div>
  );
}

function Trim3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Trim3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <LeadIcon />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Create Tag</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <InputMultiSelect />
      <Button4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[763px]">
      <InputTextLine />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Training Objective</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Describe the skills you are wanting the participant to put into practice. What is the main reason for this training? What is the underlying problem this training is seeking to address?</p>
    </div>
  );
}

function InputTextAreaExpand() {
  return (
    <div className="absolute bottom-[3px] right-[3px] size-[8px]" data-name="_input-text-area-expand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="_input-text-area-expand">
          <line id="Line 1" stroke="var(--stroke-0, #512EAB)" x1="0.646447" x2="7.01041" y1="7.30331" y2="0.939346" />
          <line id="Line 2" stroke="var(--stroke-0, #512EAB)" x1="4.64645" x2="6.76777" y1="7.07107" y2="4.94975" />
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow h-full leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Training Objective*</p>
          <InputTextAreaExpand />
        </div>
      </div>
    </div>
  );
}

function InputTextAreaField() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="_input_text_area_field">
      <Input2 />
    </div>
  );
}

function InputTextArea() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[763px]" data-name="input-text-area">
      <InputTextAreaField />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame18 />
      <InputTextArea />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">LEL Curriculum Alignment</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Select which Leadership, Ethics, and Law (LEL) course this scenario supports. This ensure the training objectives align with the Brigade’s core curriculum and allows for integrated assessment across classroom and simulation learning.</p>
    </div>
  );
}

function Trim4() {
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
      <Trim4 />
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

function Input3() {
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
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="input-search">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Input3 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Leadership (NL)</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Ethics (NE)</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">{`Law, Philosophy & Psychology (NP)`}</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="button-group">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Radio() {
  return <div className="absolute bg-white border-2 border-[#512eab] border-solid left-1/2 rounded-[1000px] size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Radio" />;
}

function InputRadioItem() {
  return (
    <div className="relative rounded-[1000px] shrink-0 size-[18px]" data-name="_input-radio-item">
      <Radio />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputRadioItem />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">NL110: Applied Behavioral Science</p>
    </div>
  );
}

function InputRadio() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
      <Input4 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">{`Midshipmen examine fundamental tenets of leadership in the context of the theories and principles of individual and group leadership during their first semester. Topics include self-knowledge, self-leadership, and team leadership as well as a Brigade Leader seminar on peer leadership. Midshipmen learn about themselves as leaders through inventories such as the Myers-Briggs Type Indicator, StrengthsFinder inventory, and Values in Action survey which culminates in creating a personal life mission statement. The course instructors provide relevant personal and Fleet-based examples and emphasize interactive learning. `}</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputRadio />
        </div>
      </div>
    </div>
  );
}

function Radio1() {
  return <div className="absolute bg-white border-2 border-[#512eab] border-solid left-1/2 rounded-[1000px] size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Radio" />;
}

function InputRadioItem1() {
  return (
    <div className="relative rounded-[1000px] shrink-0 size-[18px]" data-name="_input-radio-item">
      <Radio1 />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputRadioItem1 />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">NE203: Ethics and Moral Reasoning</p>
    </div>
  );
}

function InputRadio1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
      <Input5 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">{`This course is designed for Midshipmen to evaluate the moral responsibilities inherit in military leadership, responsibilities that require discerning moral perception, reflective ethical deliberation, and the development of moral virtue. Recent and historical case studies are combined with insights from ethical theory in order to consider how the long history of ethical thought can best be applied to the life of a modern, professional military learde. `}</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputRadio1 />
        </div>
      </div>
    </div>
  );
}

function Radio2() {
  return <div className="absolute bg-white border-2 border-[#512eab] border-solid left-1/2 rounded-[1000px] size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Radio" />;
}

function InputRadioItem2() {
  return (
    <div className="relative rounded-[1000px] shrink-0 size-[18px]" data-name="_input-radio-item">
      <Radio2 />
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputRadioItem2 />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">NL310: Organizational Behavior</p>
    </div>
  );
}

function InputRadio2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
      <Input6 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">{`Students examine the theory and research of the contingent and dynamic process of leadership. Students refine and further develop their understanding of personal strengths, values, and growth opportunities in the context of team, group, and organizational leadership, as well as through the creation of a leadership vision and professional development plan. The course combines literature from the fields of social psychology, organizational behavior, and group dynamics to help students understand the factors that influence leadership in a military context. `}</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputRadio2 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[717px] relative shrink-0 w-[763px]">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
        <InputSearch />
        <ButtonGroup />
        <Frame29 />
        <Frame34 />
        <Frame35 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[88px] items-start pb-0 pt-[56px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Ethical Framework</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Select which ethical framework should guide the assessment of this scenario. Midshipmen will be evaluated on how well they apply these principles when facing the dilemma presented.</p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputCheckboxItem() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
      <Checkbox />
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputCheckboxItem />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Utilitarianism</p>
    </div>
  );
}

function InputCheckbox() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
      <Input7 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">Actions should produce the greatest good for the greatest number. Officers must weigh outcomes and consequences, considering unit readiness, mission success, and the wellbeing of all sailors under their command.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputCheckbox />
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputCheckboxItem1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
      <Checkbox1 />
    </div>
  );
}

function Input8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputCheckboxItem1 />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Deontology</p>
    </div>
  );
}

function InputCheckbox1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
      <Input8 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">Focuses on duty, rules, and obligations regardless of consequences. Officers must uphold Navy core values, regulations, and the chain of command even when facing difficult circumstances.</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputCheckbox1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputCheckboxItem2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
      <Checkbox2 />
    </div>
  );
}

function Input9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputCheckboxItem2 />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Virtue Ethics</p>
    </div>
  );
}

function InputCheckbox2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
      <Input9 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">Emphasizes character and moral excellence. Officers should embody honor, courage, and commitment while developing practical wisdom to navigate complex situations with integrity.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputCheckbox2 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputCheckboxItem3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
      <Checkbox3 />
    </div>
  );
}

function Input10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
      <InputCheckboxItem3 />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Just War Tradition</p>
    </div>
  );
}

function InputCheckbox3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
      <Input10 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">Applies principles of proportionality, discrimination, and just cause to military action. Officers must understand legitimate use of force, rules of engagement, and their moral obligations in combat.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <InputCheckbox3 />
        </div>
      </div>
    </div>
  );
}

function Trim5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Trim5 />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <LeadIcon1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Add framework</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[763px]">
      <Frame33 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Button8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Scenario Context</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Describe the roleplay scenario you want to create for this training. Consider the role the Digital Human should be playing - what is their persona, motivations and needs? What is the purpose for the meeting, how should the conversation play out, and what does success and failure look like for the user?</p>
    </div>
  );
}

function InputTextAreaExpand1() {
  return (
    <div className="absolute bottom-[3px] right-[3px] size-[8px]" data-name="_input-text-area-expand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="_input-text-area-expand">
          <line id="Line 1" stroke="var(--stroke-0, #512EAB)" x1="0.646447" x2="7.01041" y1="7.30331" y2="0.939346" />
          <line id="Line 2" stroke="var(--stroke-0, #512EAB)" x1="4.64645" x2="6.76777" y1="7.07107" y2="4.94975" />
        </g>
      </svg>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow h-full leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Scenario Context*</p>
          <InputTextAreaExpand1 />
        </div>
      </div>
    </div>
  );
}

function InputTextAreaField1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="_input_text_area_field">
      <Input11 />
    </div>
  );
}

function InputTextArea1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-text-area">
      <InputTextAreaField1 />
    </div>
  );
}

function Trim6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p303cde40} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
      <Trim6 />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Generate context</p>
      </div>
      <TrailIcon1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Generate context based off curriculum and ethical framework</p>
      <Button9 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[763px]">
      <InputTextArea1 />
      <Frame39 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame23 />
      <Frame38 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Course Materials</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Link or upload course materials, readings, or regulations that provide context for this scenario. These resources will be available to midshipmen during the briefing phase to ensure they have the foundational knowledge needed.</p>
    </div>
  );
}

function Input12() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Add a link to course materials (e.g YouTube video)</p>
        </div>
      </div>
    </div>
  );
}

function InputTextLineField1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="_input_text_line_field">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Input12 />
      </div>
    </div>
  );
}

function InputTextLine1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-text-line">
      <InputTextLineField1 />
    </div>
  );
}

function Trim7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trim">
          <path d={svgPaths.p3e3f9780} fill="var(--fill-0, #171717)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ControlsUpload() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="controls/upload">
      <Trim7 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#171717] text-[16px] text-center w-[290px]">Drag your files here or click to upload</p>
      <ControlsUpload />
    </div>
  );
}

function InputFileUploadMessage() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="_input-file-upload-message">
      <Wrapper />
    </div>
  );
}

function InputFileUploadDragClickZone() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="_input-file-upload-drag-click-zone">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative w-full">
          <InputFileUploadMessage />
        </div>
      </div>
    </div>
  );
}

function InputFileUpload() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="input-file-upload">
      <InputFileUploadDragClickZone />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[763px]">
      <InputTextLine1 />
      <InputFileUpload />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame24 />
      <Frame40 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[400px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Persona</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{`Configure the persona that you want to use for this training scenario, including their personality traits. `}</p>
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="UserCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="UserCircle">
          <path d={svgPaths.p1b0c4180} fill="var(--fill-0, #1D5282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#f6f6fb] content-stretch flex items-center justify-center p-[16px] relative rounded-[36px] shrink-0 size-[72px]">
      <UserCircle />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#171717] text-[16px] text-center w-[290px]">Give your persona a name, role, and personality</p>
    </div>
  );
}

function InputFileUploadMessage1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="_input-file-upload-message">
      <Wrapper1 />
    </div>
  );
}

function InputFileUploadDragClickZone1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="_input-file-upload-drag-click-zone">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[24px] relative w-full">
          <Frame37 />
          <InputFileUploadMessage1 />
        </div>
      </div>
    </div>
  );
}

function Trim8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Trim8 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <LeadIcon2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Create persona</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[763px]">
      <InputFileUploadDragClickZone1 />
      <Button10 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">Cancel</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Save scenario</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-[24px] relative shrink-0 w-full">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[989px] items-start left-[389px] top-[128px] w-[1251px]">
      <Frame11 />
      <Frame12 />
      <Frame17 />
      <Frame13 />
      <Frame14 />
      <Frame13 />
      <Frame15 />
      <Frame16 />
      <Frame27 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#f6f6fb] relative size-full" data-name="MacBook Pro 16' - 14">
      <Frame />
      <Frame2 />
      <Frame7 />
      <Frame28 />
    </div>
  );
}