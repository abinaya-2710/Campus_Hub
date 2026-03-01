import svgPaths from "./svg-ir81450caf";
import imgImg from "figma:asset/4a8affbdf9b578fd4d35b9ca1c05d01c0ec5b6e8.png";
import imgImg1 from "figma:asset/99098db3ed33ba2ed32b1978988e8d9c17ce9c72.png";
import imgImg2 from "figma:asset/3f78493a88922fdd149b2af981a325f1537d6d6a.png";
import imgImage2 from "figma:asset/eba2245e47fe6fe2437d1915e31d85d293410cef.png";

function Button() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[62.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[31px] not-italic text-[14px] text-black text-center top-[5.5px]">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32px] mr-[-5px] relative rounded-[8px] shrink-0 w-[64.945px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[32px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5.5px]">Events</p>
    </div>
  );
}

function MingcuteDownFill() {
  return (
    <div className="mr-[-5px] overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:down-fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3aebcc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[83px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[5px] relative w-full">
        <Button1 />
        <MingcuteDownFill />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[32px] mr-[-5px] relative rounded-[8px] shrink-0 w-[64.945px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[32.5px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5.5px]">Clubs</p>
    </div>
  );
}

function MingcuteDownFill1() {
  return (
    <div className="mr-[-5px] overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:down-fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3aebcc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[83px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[5px] relative w-full">
        <Button2 />
        <MingcuteDownFill1 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[59px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[29.5px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5.5px]">About Us</p>
      </div>
    </div>
  );
}

function Button4() {
  return <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px rounded-[8px]" data-name="Button" />;
}

function Nav() {
  return (
    <div className="absolute content-stretch flex gap-[42px] h-[32px] items-center left-0 top-px w-[421px]" data-name="nav">
      <Button />
      <Frame />
      <Frame1 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-3.75%_-4.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.498 21.5">
          <g id="Group">
            <path d={svgPaths.p2f5cb600} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p5864500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarBellLinear() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+375.5px)] overflow-clip size-[24px] top-1/2" data-name="solar:bell-linear">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[807px] top-0">
      <div className="absolute left-[807px] size-[34px] top-0">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 1" />
        </svg>
      </div>
      <SolarBellLinear />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[34px] left-[510px] top-[36px] w-[897px]">
      <Nav />
      <Group1 />
      <div className="absolute left-[863px] size-[34px] top-0">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 2" r="17" />
        </svg>
      </div>
      <div className="absolute left-[825px] size-[7px] top-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #4F46E5)" id="Ellipse 3" r="3.5" />
        </svg>
      </div>
    </div>
  );
}

function MaterialSymbolsSearch() {
  return (
    <div className="absolute left-[423px] size-[24px] top-[258px]" data-name="material-symbols:search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:search">
          <path d={svgPaths.p69a6700} fill="var(--fill-0, #3A5B22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[407px] top-[246px]">
      <div className="absolute bg-white border-[#949494] border-[0.8px] border-solid h-[47px] left-[407px] rounded-[16px] top-[246px] w-[625px]" />
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[452px] text-[#838383] text-[13px] top-[262px]">Search for events....</p>
      <MaterialSymbolsSearch />
    </div>
  );
}

function H() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[-2px]">Upcoming Events</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px]">{`Don't miss out on these exciting happenings`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68px] relative shrink-0 w-[313.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <H />
        <P />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[85.234px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[43px] not-italic text-[#0a0a0a] text-[14px] text-center top-[7.5px]">View All</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[68px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button5 />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Startup Pitch Night</p>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Entrepreneurship Cell</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.477px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">05:30 PM</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Calendar />
      <Span />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.797px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Innovation Hub</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin />
      <Span1 />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.75px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">89 interested</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users />
      <Span2 />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[166px]">
      <div className="-translate-x-1/2 absolute bg-[#3a5b22] h-[33px] left-[calc(50%-0.5px)] rounded-[19px] top-[166px] w-[323px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+83px)]">Join Now</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute h-[184px] left-px top-[193px] w-[354px]" data-name="CardContent">
      <H1 />
      <P1 />
      <Div />
      <Group3 />
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">18</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[230.38px] rounded-[8px] top-[12px] w-[111.625px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Entrepreneurship</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img />
      <Container5 />
      <Badge />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent />
        <Div1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Spring Music Festival</p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Music Society</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.477px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">06:00 PM</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Calendar1 />
      <Span3 />
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[104.617px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Main Auditorium</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin1 />
      <Span4 />
    </div>
  );
}

function Users1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.297px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">423 interested</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users1 />
      <Span5 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute h-[184px] left-px top-[189px] w-[354px]" data-name="CardContent">
      <H2 />
      <P2 />
      <Div2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[359px]">
      <div className="-translate-x-1/2 absolute bg-[#3a5b22] h-[33px] left-[calc(50%-0.5px)] rounded-[19px] top-[359px] w-[323px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+167px)]">Join Now</p>
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">22</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[281.23px] rounded-[8px] top-[12px] w-[60.773px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Cultural</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img1 />
      <Container11 />
      <Badge1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent1 />
        <Group4 />
        <Div3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Hackathon 2026: Build the Future</p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Code Club</p>
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.664px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">09:00 AM</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Calendar2 />
      <Span6 />
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.727px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Tech Lab, Building A</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin2 />
      <Span7 />
    </div>
  );
}

function Users2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.297px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">156 interested</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users2 />
      <Span8 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Group5() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[168px]">
      <div className="-translate-x-1/2 absolute bg-[#3a5b22] h-[33px] left-[calc(50%-0.5px)] rounded-[19px] top-[168px] w-[323px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+83px)]">Join Now</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute h-[184px] left-px top-[191px] w-[354px]" data-name="CardContent">
      <H3 />
      <P3 />
      <Div4 />
      <Group5 />
    </div>
  );
}

function Img2() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">15</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[274.36px] rounded-[8px] top-[12px] w-[67.641px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Technical</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img2 />
      <Container17 />
      <Badge2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent2 />
        <Div5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[66px] items-center relative shrink-0 w-full">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Startup Pitch Night</p>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Entrepreneurship Cell</p>
    </div>
  );
}

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.477px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">05:30 PM</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Calendar3 />
      <Span9 />
    </div>
  );
}

function MapPin3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.797px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Innovation Hub</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin3 />
      <Span10 />
    </div>
  );
}

function Users3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.75px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">89 interested</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users3 />
      <Span11 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Group6() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[166px]">
      <div className="-translate-x-1/2 absolute bg-[#3a5b22] h-[33px] left-[calc(50%-0.5px)] rounded-[19px] top-[166px] w-[323px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+83px)]">Join Now</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute h-[184px] left-px top-[193px] w-[354px]" data-name="CardContent">
      <H4 />
      <P4 />
      <Div6 />
      <Group6 />
    </div>
  );
}

function Img3() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">18</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[230.38px] rounded-[8px] top-[12px] w-[111.625px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Entrepreneurship</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img3 />
      <Container23 />
      <Badge3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent3 />
        <Div7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Spring Music Festival</p>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Music Society</p>
    </div>
  );
}

function Calendar4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.477px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">06:00 PM</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Calendar4 />
      <Span12 />
    </div>
  );
}

function MapPin4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[104.617px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Main Auditorium</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin4 />
      <Span13 />
    </div>
  );
}

function Users4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.297px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">423 interested</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users4 />
      <Span14 />
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute h-[184px] left-px top-[189px] w-[354px]" data-name="CardContent">
      <H5 />
      <P5 />
      <Div8 />
    </div>
  );
}

function Group7() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[359px]">
      <div className="-translate-x-1/2 absolute bg-[#3a5b22] h-[33px] left-[calc(50%-0.5px)] rounded-[19px] top-[359px] w-[323px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+167px)]">Join Now</p>
    </div>
  );
}

function Img4() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">22</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[281.23px] rounded-[8px] top-[12px] w-[60.773px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Cultural</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img4 />
      <Container29 />
      <Badge4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent4 />
        <Group7 />
        <Div9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Hackathon 2026: Build the Future</p>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Code Club</p>
    </div>
  );
}

function Calendar5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.664px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">09:00 AM</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Calendar5 />
      <Span15 />
    </div>
  );
}

function MapPin5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.727px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Tech Lab, Building A</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin5 />
      <Span16 />
    </div>
  );
}

function Users5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.297px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">156 interested</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users5 />
      <Span17 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Group8() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[168px]">
      <div className="-translate-x-1/2 absolute bg-[#3a5b22] h-[33px] left-[calc(50%-0.5px)] rounded-[19px] top-[168px] w-[323px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+83px)]">Join Now</p>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="absolute h-[184px] left-px top-[191px] w-[354px]" data-name="CardContent">
      <H6 />
      <P6 />
      <Div10 />
      <Group8 />
    </div>
  );
}

function Img5() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">15</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[274.36px] rounded-[8px] top-[12px] w-[67.641px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Technical</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img5 />
      <Container35 />
      <Badge5 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent5 />
        <Div11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[66px] items-center relative shrink-0 w-full">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-[1200px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[45px] items-center left-[58px] top-[382px] w-[1327px]">
      <Container />
      <Frame5 />
    </div>
  );
}

function H7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[-2px]">Past Events</p>
    </div>
  );
}

function P7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px]">Take a look at the events that have already taken place across campus.</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[68px] relative shrink-0 w-[313.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <H7 />
        <P7 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[85.234px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[43px] not-italic text-[#0a0a0a] text-[14px] text-center top-[7.5px]">View All</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[68px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Button6 />
    </div>
  );
}

function H8() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Startup Pitch Night</p>
    </div>
  );
}

function P8() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Entrepreneurship Cell</p>
    </div>
  );
}

function MapPin6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.797px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Innovation Hub</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin6 />
      <Span18 />
    </div>
  );
}

function Users6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.75px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">89 interested</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users6 />
      <Span19 />
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Group9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-0.5px)] top-[calc(50%+91px)]">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-32px)] text-[13px] text-white top-[calc(50%+83px)]">Join Now</p>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="absolute h-[184px] left-px top-[191px] w-[354px]" data-name="CardContent">
      <H8 />
      <P8 />
      <Div12 />
      <Group9 />
    </div>
  );
}

function Img6() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">18</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[230.38px] rounded-[8px] top-[12px] w-[111.625px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Entrepreneurship</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img6 />
      <Container42 />
      <Badge6 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[348px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent6 />
        <Div13 />
        <div className="absolute bg-[rgba(0,0,0,0.27)] h-[349px] left-[-0.5px] top-px w-[355px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function H9() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Spring Music Festival</p>
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Music Society</p>
    </div>
  );
}

function MapPin7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[104.617px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Main Auditorium</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin7 />
      <Span20 />
    </div>
  );
}

function Users7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.297px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">423 interested</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users7 />
      <Span21 />
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container45 />
      <Container46 />
    </div>
  );
}

function CardContent7() {
  return (
    <div className="absolute h-[184px] left-px top-[189px] w-[354px]" data-name="CardContent">
      <H9 />
      <P9 />
      <Div14 />
    </div>
  );
}

function Img7() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">22</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[281.23px] rounded-[8px] top-[12px] w-[60.773px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Cultural</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img7 />
      <Container47 />
      <Badge7 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[344px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent7 />
        <Div15 />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.27)] h-[349px] left-1/2 top-[calc(50%+0.5px)] w-[355px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function H10() {
  return (
    <div className="absolute h-[28px] left-[16px] overflow-clip top-[16px] w-[322px]" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[-1px]">Hackathon 2026: Build the Future</p>
    </div>
  );
}

function P10() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[52px] w-[322px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.5px]">Code Club</p>
    </div>
  );
}

function MapPin8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.727px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">Tech Lab, Building A</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <MapPin8 />
      <Span22 />
    </div>
  );
}

function Users8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.297px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.5px]">156 interested</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Users8 />
      <Span23 />
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[16px] top-[84px] w-[322px]" data-name="div">
      <Container50 />
      <Container51 />
    </div>
  );
}

function CardContent8() {
  return (
    <div className="absolute h-[184px] left-px top-[191px] w-[354px]" data-name="CardContent">
      <H10 />
      <P10 />
      <Div16 />
    </div>
  );
}

function Img8() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[354px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-center uppercase whitespace-pre-wrap">Mar</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px] text-center whitespace-pre-wrap">15</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[64px] items-start left-[12px] pt-[8px] px-[8px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[12px] w-[60px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#030213] h-[22px] left-[274.36px] rounded-[8px] top-[12px] w-[67.641px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Technical</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute h-[192px] left-px overflow-clip top-px w-[354px]" data-name="div">
      <Img8 />
      <Container52 />
      <Badge8 />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white h-[344px] relative rounded-[14px] shrink-0 w-[356px]" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent8 />
        <Div17 />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.27)] h-[349px] left-1/2 top-[calc(50%+0.5px)] w-[355px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[66px] items-center relative shrink-0 w-full">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]">
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[45px] items-center left-[calc(50%+0.5px)] top-[1371px] w-[1327px]">
      <Container38 />
      <Frame8 />
    </div>
  );
}

function Span24() {
  return (
    <div className="h-[28px] relative shrink-0 w-[29.43px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[-1.5px]">KPRIET</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[28px]" data-name="image 2">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Span24 />
    </div>
  );
}

function P11() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px] w-[145px] whitespace-pre-wrap">Your intelligent campus guide. Never miss an event or opportunity again.</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[162px]" data-name="Container">
      <Container57 />
      <P11 />
    </div>
  );
}

function H11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px]">Quick Links</p>
    </div>
  );
}

function Li() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Home</p>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Events</p>
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Clubs</p>
    </div>
  );
}

function Li3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">About us</p>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <H11 />
      <Ul />
    </div>
  );
}

function H12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px]">Categories</p>
    </div>
  );
}

function Li4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Technical</p>
    </div>
  );
}

function Li5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Cultural</p>
    </div>
  );
}

function Li6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Sports</p>
    </div>
  );
}

function Li7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">Arts</p>
    </div>
  );
}

function Ul1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="ul">
      <Li4 />
      <Li5 />
      <Li6 />
      <Li7 />
    </div>
  );
}

function Container59() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <H12 />
      <Ul1 />
    </div>
  );
}

function H13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px]">Contact</p>
    </div>
  );
}

function Li8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px]">kai@college.edu</p>
    </div>
  );
}

function Li9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px] w-[136px] whitespace-pre-wrap">Student Center, Room 101</p>
    </div>
  );
}

function Li10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.5px] w-[134px] whitespace-pre-wrap">Campus Hotline: 555-0123</p>
    </div>
  );
}

function Ul2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[116px] items-start relative shrink-0 w-full" data-name="ul">
      <Li8 />
      <Li9 />
      <Li10 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <H13 />
      <Ul2 />
    </div>
  );
}

function Container55() {
  return (
    <div className="-translate-x-1/2 absolute gap-x-[68px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[156px] left-[calc(50%-0.5px)] top-[48px] w-[1113px]" data-name="Container">
      <Container56 />
      <Container58 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function P12() {
  return (
    <div className="absolute bottom-0 h-[20px] left-0 w-[1388px]" data-name="p">
      <p className="-translate-x-1/2 absolute bottom-[20px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%-0.5px)] not-italic text-[#99a1af] text-[14px] text-center translate-y-full">© 2026 KPRIET. Making campus life easier for everyone.</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pt-[33px] top-[187px] w-[1388px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-solid border-t inset-0 pointer-events-none" />
      <P12 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex flex-col gap-[32px] h-[325px] items-start left-0 pt-[48px] px-[16px] top-[2095px] w-[1440px]" data-name="Footer">
      <Container55 />
      <Container61 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <Frame2 />
      <p className="-translate-x-1/2 absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[calc(50%-0.5px)] text-[40px] text-black text-center top-[137px] uppercase">Discover What’s Happening On Campus</p>
      <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[#787878] text-[15px] text-center top-[181px]">Explore, register, and never miss out on the latest club activities and student-led experiences</p>
      <Group2 />
      <Frame6 />
      <Frame7 />
      <Footer />
    </div>
  );
}