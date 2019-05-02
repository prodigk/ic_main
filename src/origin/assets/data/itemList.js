const itemList = {
  typeList: {
    // 카테고리 리스트
    0: "All",
    1: "States",
    2: "Scroll",
    3: "Splash",
    4: "Page",
    5: "Flow",
    6: "Banner",
    7: "Animation",
    8: "UI Component",
    9: "Menu Navigation",
    10: "Reference",
    11: "ETC"
  },
  item: {
    /*framer: [ // TOOL 명
  {
    id: 인덱스 번호,
    type: 카테고리 번호(위 참조),
    title: 타이틀명,
    jpgImg: 목업 JPG 172*306,
    jpgImg_s: 리스트 JPG 230*210,
    gifImg: 목업,디테일 GIF 322*572,
    desc: 설명,
    used: 활용영역,
    url: 코드 URL,
    date: 날짜,
    tag: ['#태그1', '#태그2'],
    source: iframe URL
  } */
    framer: [
      {
        id: 40,
        type: 10,
        title: "Sticky Header",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_40.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_40.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f40.gif",
        desc: "Custom Module(StickyHeaders)을 활용하여 스크롤시 특정 높이값에 반응하여 탭영역이 상단에 고정",
        used: "활용영역 : 메인 페이지",
        url: "https://framer.cloud/dYWKT",
        date: "2018-4-20",
        tag: ["#StickyHeader", "#ScrollComponent", "#Utils.modulate", "#FlowComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/ZZYdQw/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 39,
        type: 2,
        title: "페이지 스크롤에 따른 상단변경",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_39.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_03.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f39.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 컨텐츠 피드 리스트",
        url: "https://framer.cloud/ErvaT",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#change:"],
        source:
          '<iframe height="600" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/mgyZgx/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 38,
        type: 10,
        title: "App Store Style - Card View Scroll",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_38.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_38.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f38.gif",
        desc: "카드 탭시 하위 댑스가 현재 위치에서 확장 후에 스크롤 기능 추가",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지",
        url: "https://framer.cloud/XOpyf",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#Array", "#states", "#onMove", "Utils.delay", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="yes" title="yEKvxZ" src="//codepen.io/ugen/embed/dLPxbV/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 37,
        type: 8,
        title: "Card View Transition2",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_37.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_37.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f37.gif",
        desc: "개별카드 선택후 페이지로 확장되고 스크롤 가능",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지 / 상세페이지",
        url: "https://framer.cloud/HIApg",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#Defualts", "#Array", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/YMPmXe/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 36,
        type: 8,
        title: "Card View Transition1",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_38a.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_02.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f36.gif",
        desc: "여러개의 카드리스트중 개별 카드선택후 페이지로 확장",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지",
        url: "https://framer.cloud/reGRi",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#Defualts", "#Array", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/axOzRE/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 35,
        type: 2,
        title: "Random Background Image",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_36.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_36.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f35.gif",
        desc:
          "하단 끝까지 스크롤시 배경 이미지를 다르게 노출",
        used: "활용영역 : Footer / 브랜딩 영역",
        url: "https://framer.cloud/xWgjp",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#randomNumber", "#randomChoice", "#Utils.round", "#Utils.modulate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/XQbJQe/?height=800&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 34,
        type: 7,
        title: "Notification UI",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_35.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_35.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f34.gif",
        desc:
          "5초 간격으로 하단 카드 노티 애니메이션 / 스크롤하여 카드 내용 확인후에는 애니메이션 정지",
        used: "활용영역 : 메인페이지 / 노티피케이션",
        url: "https://framer.cloud/hwQUM",
        date: "2018-4-20",
        tag: ["#PageComponent", "#else if", "#onAnimationEnd", "#Utils.delay", "#onSwipeDownEnd", "#Utils.modulate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/YMXPmB/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 33,
        type: 4,
        title: "Page Swipe",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_34.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_34.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f33.gif",
        desc:
          "페이지 스와이핑 인터랙션과 페이지별 스크롤 적용",
        used: "활용영역 : 메인페이지 / 컨텐츠 피드 리스트 / 페이징",
        url: "https://framer.cloud/QUzQz",
        date: "2018-4-20",
        tag: ["#PageComponent", "#ScrollComponent", "#Array", "#states.active", "#idx", "#change:"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axOOzG/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 32,
        type: 7,
        title: "Player Album Swipe",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_33.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_33.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f32.gif",
        desc:
          "페이지 변환시 백그라운드 이미지 트렌지션 / 앨범 이미지 탭시 페이징",
        used: "활용영역 : 뮤직 플레이어 / 이미지 갤러리 / 배너 페이징",
        url: "https://framer.cloud/qbPOm",
        date: "2018-4-20",
        tag: ["#PageComponent", "#Array", "#change:"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/oOXXZV/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 31,
        type: 7,
        title: "Background Color Transition",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_32.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_32.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f31.gif",
        desc:
          "페이지 변환시 백그라운드 컬러 트렌지션",
        used: "활용영역 : 메인비주얼 배너 / 이미지 갤러리 / 페이징",
        url: "https://framer.cloud/QVcLQ",
        date: "2018-4-20",
        tag: ["#PageComponent", "#Array", "#change:", "#AnimationEnd"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/bJddoB/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 30,
        type: 8,
        title: "Scrollable Drawer",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_30.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_15.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f30.gif",
        desc:
          "더보기 버튼 선택 후 Scrollable Drawer 메뉴 노출",
        used: "활용영역 : 메인페이지 / 드로어메뉴 / 설정 / 필터UI",
        url: "https://framer.cloud/sSOlv",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#FlowComponent", "#Defaults"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="framer_30" src="//codepen.io/ugen/embed/OGVVQX/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 29,
        type: 8,
        title: "Floating Action Button",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_29.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_07.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f29.gif",
        desc:
          "스크롤 시 FAB버튼 축소 / 최상단으로 스크롤시 FAB버튼 확장 / 스테이터스바 탭시 최상단으로 스크롤 이동",
        used: "활용영역 : FAB / 탭버튼",
        url: "https://framer.cloud/dXxgL",
        date: "2018-4-20",
        tag: ["#PageComponent", "#Defaults", "#else if"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="framer_29" src="//codepen.io/ugen/embed/pBJJVp/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 28,
        type: 8,
        title: "Material Backdrop UI Menu Type II",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_28.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_28.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f28.gif",
        desc:
          "Backdrop UI 인터랙션 / 메뉴 버튼 탭시 해당영역이 확장되면서 메뉴 노출 / 필터 버튼 탭시 필터 메뉴로 변경",
        used: "활용영역 : Backdrop UI / 컨텐츠 피드 리스트",
        url: "https://framer.cloud/FabAW",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Defaults", "#ignoreEvnets", "#stateSwitch", "#Utils.delay", "#draggable", "#states", "#overdragScale"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="framer_28" src="//codepen.io/ugen/embed/jRqKMj/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 27,
        type: 8,
        title: "Material Backdrop UI Menu Type I",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_27.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_27.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f27.gif",
        desc:
          "Backdrop UI 인터랙션 / 메뉴 버튼 탭시 해당영역이 확장되면서 메뉴 노출 / 컨텐츠 가로 스크롤",
        used: "활용영역 : Backdrop UI / 컨텐츠 피드 리스트",
        url: "https://framer.cloud/jcfSK",
        date: "2018-4-20",
        tag: ["#ScrollComponent","#scrollVertical", "#Defaults", "#draggable", "#states", "#overdragScale"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zXqaNK/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 26,
        type: 2,
        title: "Backdrop UI H-Scroll",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_26.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_26.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f26.gif",
        desc:
          "매터리얼 2.0 UI중 Backdrop UI형태에서 피드 컨텐츠의 가로스크롤",
        used: "활용영역 : 컨텐츠 피드 리스트 / 가로 스크롤",
        url: "https://framer.cloud/UMeoI",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#scrollVertical", "#draggable", "#overdragScale"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/vMGrxR/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 25,
        type: 7,
        title: "Generate Contents List II",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_25.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_25.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f25.gif",
        desc:
          "화면 진입시 순차적인 2x2 컨텐츠 생성을 애니메이션으로 구현",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인화면 컨텐츠 구성",
        url: "https://framer.cloud/CeiIs",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#for in", "#children", "#animate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/XQdYzN/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 24,
        type: 7,
        title: "Generate Contents List I",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_24.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_24.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f24.gif",
        desc:
          "화면 진입시 리스트를 배열로 생성하고 시차적용된 애니메이션으로 구현",
        used: "활용영역 : 컨텐츠 피드 리스트 / 연락처",
        url: "https://framer.cloud/RpTfr",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Array", "#for in", "#Utils.delay"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/BEKVJb/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 23,
        type: 7,
        title: "Mic Effect Animation",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_23.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_23.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f23.gif",
        desc:
          "마이크 버튼 탭을 활용한 랜덤한 사이즈의 원형파동 애니메이션 시작/정지 컨트롤",
        used: "활용영역 : 음성입력 피드백, 레코딩 피드백",
        url: "https://framer.cloud/TAivs",
        date: "2018-4-20",
        tag: ["#Utils.randomNumber", "#animate", "#curve"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/OGNEQq/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 22,
        type: 5,
        title: "Feed Contents UI Flow",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_22.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_22.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f22.gif",
        desc:
          "FlowComponent를 활용하여 간단하게 화면간 이동 구현 / Utils.modulate를 이용해 상단 텍스트, 이미지에 스크롤 Y값과 연동되는 애니메이션 적용",
        used: "활용영역 : 메인페이지 / 상세페이지 / 메뉴이동 / 스크롤 인터랙션 ",
        url: "https://framer.cloud/nRUYq",
        date: "2018-4-20",
        tag: ["#FlowComponent", "#scroll", "#states", "#Utils.modulate", "#scrollToPoint"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/ROaJMY/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 21,
        type: 7,
        title: "Equalizer Animation",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_21.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_21.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f21.gif",
        desc:
          "버튼 탭을 활용하여 이퀄라이저 애니메이션 시작/정지 컨트롤",
        used: "활용영역 : 이퀄라이저 / 음성재생",
        url: "https://framer.cloud/TGDys",
        date: "2018-4-20",
        tag: ["#Utils.randomNumber", "#animate", "#for in", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/GLZGdw/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 20,
        type: 2,
        title: "Parallax Scroll",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_20.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_20.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f20.gif",
        desc:
          "스크롤에 따른 상, 하단 네비게이션바연동 이미지 패럴랙스 애니메이션 (modulate 사용) / Statusbar 영역 터치시 특정 위치로 스크롤 화면 이동",
        used: "활용영역 : 메인페이지 / Bottom Navigation",
        url: "https://framer.cloud/OdbKG",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Defaults", "#states", "#for in", "#Utils.round", "#if esle", "#animate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 19,
        type: 8,
        title: "Bottom Sheet UI + Main Scroll",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_19.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_19.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f19.gif",
        desc:
          "메인화면 스크롤 패턴과 하단 바에 bottomSheet 모듈을 적용하여 스와이프하여 끌어올리기 가능",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인페이지 / Bottom Sheet / Category List",
        url: "https://framer.cloud/zetyq",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Module", "#states", "#sendToBack"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 18,
        type: 9,
        title: "Tab Bar Navigation",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_18.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_18.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f18.gif",
        desc:
          "탭바 모듈을 활용하여 상단 메뉴바 네비게이션 구성. 탭선택에 따라 하단 화면의 스크롤이동",
        used: "활용영역 : 서브탭메뉴 / 페이징 / UI Flow",
        url: "https://framer.cloud/VKDBi",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Module", "for in", "#sendToBack"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 17,
        type: 4,
        title: "Page Swipe",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_17.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_17.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f17.gif",
        desc:
          "메인 화면 컨텐츠 구성. 배너 영역 페이징과 검색창 고정 및 페이지 스크롤",
        used: "활용영역 : 컨텐츠 피드 리스트 / 페이징 / 메인 페이지",
        url: "https://framer.cloud/qPiZn",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Module", "for in", "#sendToBack"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 16,
        type: 2,
        title: "Parallax Scroll",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_16.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_16.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f16.gif",
        desc:
          "패럴랙스 스크롤 패턴, 택스트와 배경을 분리하여 시간차를 두고 움직임. 상단바 탭시 최상단으로 이동",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지",
        url: "https://framer.cloud/bDrNm",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#scrollToPoint", "#Array", "#for in", "#Utils.round", "#parallax"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 15,
        type: 2,
        title: "Music Player II (Flow)",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_15.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_15.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f15.gif",
        desc:
          "음악 리스트에서 뮤직플레이어 화면으로 이동. 뮤직 플레이어의 컨트롤 기능 포함(슬라이더, 이전, 다음 등)",
        used: "활용영역 : 뮤직서비스, 플레이어",
        url: "https://framer.cloud/BnZeL",
        date: "2018-4-20",
        tag: ["#ScrollComponent","#FlowComponent", "#module", "#Array", "#draggable", "#Utils.round", "#states", "#for in", "#if else", "#change:"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 14,
        type: 2,
        title: "Music Player I",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_14.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_14.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f14.gif",
        desc:
          "진입 시 음악 재생 이전곡/다음곡 가능 뮤직 리스트 탭시 해당 노래 재생",
        used: "활용영역 : 뮤직서비스, 플레이어",
        url: "https://framer.cloud/rgdGR",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#module", "#Array", "#draggable", "#Utils.round", "#states", "#for in", "#if else", "#idx:"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/axNKjy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    framerX: [],
    lottie: [
      {
        id: 5,
        type: 7,
        title: "지문인식 Animation",
        jpgImg: "https://prodigk.github.io/ic_data/images/ls_05.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/lottie_05.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/l05.gif",
        desc:
          "탭을 시작하면 지문인식 형태의 애니메이션 시작, 엔드하면 애니메이션 정지 / 애니메이션이 모두 완료되면 다음 페이지로 이동",
        used: "활용영역 : 인증관련 화면 / 결제화면",
        url: "https://framer.cloud/HgyUQ",
        date: "2018-11-26",
        tag: ["#LottieLayer", "#FlowComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_05" src="//codepen.io/ugen/embed/vMOmNM/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 9,
        title: "Hamburger Menu",
        jpgImg: "https://prodigk.github.io/ic_data/images/ls_04.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/lt_04.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/l04.gif",
        desc:
          "햄버거 메뉴에서 뒤로가기로 트랜지션 구간 애니메이션 / 전체화면 메뉴 노출",
        used: "활용영역 : 햄버거 메뉴 / 카테고리 메뉴",
        url: "https://framer.cloud/uaTem",
        date: "2018-11-26",
        tag: ["#LottieLayer", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_04"  src="//codepen.io/ugen/embed/JVdNXa/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 3,
        title: "Datasoda Splash",
        jpgImg: "https://prodigk.github.io/ic_data/images/ls_03.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/lottie_03.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/l03.gif",
        desc:
          "일러스트 파일을 에프터이펙트에서 Shape 레이어로 변경 / Shape레이어를 스케일 애니메이션 적용",
        used: "활용영역 : 스플래시 / 일러스트 Shape 활용",
        url: "https://framer.cloud/qecgA",
        date: "2018-11-26",
        tag: ["#LottieLayer"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_03" src="//codepen.io/ugen/embed/BENRLo/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 7,
        title: "Line Animation",
        jpgImg: "https://prodigk.github.io/ic_data/images/ls_02.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/lt_02.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/l02.gif",
        desc:
          "라인 애니메이션을 활용한 스플래시 / 하단 버튼 탭시 Pause/Stop 컨트롤",
        used: "활용영역 : 스플래시 / 플레이어",
        url: "https://framer.cloud/phpva",
        date: "2018-11-26",
        tag: ["#LottieLayer", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_02" src="//codepen.io/ugen/embed/eoNWgy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 3,
        title: "Volo Splash",
        jpgImg: "https://prodigk.github.io/ic_data/images/ls_01.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/lt_01.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/l01.gif",
        desc:
          "에프터이펙트로 만든 애니메이션 Lottie json파일을 모듈을 활용하여 프레이머에서 테스트 가능하게 제작",
        used: "활용영역 : 스플래시 / 애니메이션",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#LottieLayer"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_01" src="//codepen.io/ugen/embed/NmqjpR/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
      
    ],
    principle: [
      
    ],
    sketch: [
      {
        id: 38,
        type: 10,
        title: "App Store Style - Card View Scroll",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_38.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_38.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f38.gif",
        desc: "카드 탭시 하위 댑스가 현재 위치에서 확장 후에 스크롤 기능 추가",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지",
        url: "https://framer.cloud/XOpyf",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#Array", "#states", "#onMove", "Utils.delay", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="yes" title="yEKvxZ" src="//codepen.io/ugen/embed/dLPxbV/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 37,
        type: 8,
        title: "Card View Transition2",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_37.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_37.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f37.gif",
        desc: "개별카드 선택후 페이지로 확장되고 스크롤 가능",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지 / 상세페이지",
        url: "https://framer.cloud/HIApg",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#Defualts", "#Array", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/YMPmXe/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 36,
        type: 8,
        title: "Card View Transition1",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_38a.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_02.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f36.gif",
        desc: "여러개의 카드리스트중 개별 카드선택후 페이지로 확장",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지",
        url: "https://framer.cloud/reGRi",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#Defualts", "#Array", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/axOzRE/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
    ],
    html: [
      {
        id: 32,
        type: 7,
        title: "Player Album Swipe",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_33.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_33.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f32.gif",
        desc:
          "페이지 변환시 백그라운드 이미지 트렌지션 / 앨범 이미지 탭시 페이징",
        used: "활용영역 : 뮤직 플레이어 / 이미지 갤러리 / 배너 페이징",
        url: "https://framer.cloud/qbPOm",
        date: "2018-4-20",
        tag: ["#PageComponent", "#Array", "#change:"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/oOXXZV/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 31,
        type: 7,
        title: "Background Color Transition",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_32.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/ft_32.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f31.gif",
        desc:
          "페이지 변환시 백그라운드 컬러 트렌지션",
        used: "활용영역 : 메인비주얼 배너 / 이미지 갤러리 / 페이징",
        url: "https://framer.cloud/QVcLQ",
        date: "2018-4-20",
        tag: ["#PageComponent", "#Array", "#change:", "#AnimationEnd"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/bJddoB/?height=800&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      
    ]
  }
};

export default itemList
