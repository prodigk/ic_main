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
        id: 48,
        type: 2,
        title: "Video Autoplay",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_47.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_47.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f47.gif",
        desc: "최조 진입 시 설정중인 영상 재생",
        used: "활용영역 : 동영상 자동 재생, 메인페이지 스크롤",
        url: "https://framer.cloud/gsHkO",
        date: "2020-12-09",
        tag: ["#VideoLayer", "#ScrollComponent", "#for in"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="qBadxVa" src="//codepen.io/ugen/embed/qBadxVa/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },{
        id: 47,
        type: 5,
        title: "Equalizer animation II",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_47.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_47.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f47.gif",
        desc: "재생 버튼을 탭하면 플레이어가 실행 플레이어에서 접기 버튼을 눌러 FAB 형태의 미니 플레이어로 전환",
        used: "활용영역 : FAB, 재생리스트 플레이어간 전환",
        url: "https://framer.cloud/ArHoR",
        date: "2019-8-27",
        tag: ["#Default", "#for in", "#Utils.randomNumber", "#FlowComponent", "#ignoreEvents", "#animate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/jONyGvW/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 46,
        type: 5,
        title: "Sticky Header",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_46.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_46.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f46.gif",
        desc: "스크롤시 이름과 상단 버튼은 고정되고 탭은 자연스럽게 스크롤 되다가 상단에 고정. 하단 메모를 탭하여 메모 리스트로 이동 또는 메모하기를 눌러 새로운 메모 페이지로 전환",
        used: "활용영역 : 연락처, 메모화면, 헤더네비게이션",
        url: "https://framer.cloud/RRRhM",
        date: "2019-8-27",
        tag: ["#StickyHeader", "#ScrollComponent", "#Utils.modulate", "#Extras.Hints", "Default.Animation", "#PageComponent", "#animate", "#ignoreEvents"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/oNvBGyy/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 45,
        type: 2,
        title: "Sticky Header III",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_45.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_45.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f45.gif",
        desc: "스크롤 시 검색바가 올라가고 BIZ연락처 보기와 편집 할 수 있는 영역과 인덱스 영역이 고정. 하단 네비게이션을 통해 최상단으로 이동",
        used: "활용영역 : 연락처, 검색바 배치, FAB, 하단 알림영역",
        url: "https://framer.cloud/Uqbmu",
        date: "2019-8-27",
        tag: ["#StickyHeader", "#ScrollComponent", "#Utils.delay", "#Default.Animation", "#animate", "#ignoreEvents"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/abopLKV/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 44,
        type: 5,
        title: "Sticky Header II",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_44.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_44.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f44.gif",
        desc: "스위치 토글로 업무 연락처 on/off 애니메이션 되고 탭 영역 상단에 고정. 탭 이용하여 하단 페이지 전환. 메모하기 버튼을 눌러 페이지 이동",
        used: "활용영역 : 연락처, 모드변환, 헤더/탭메뉴 고정화면",
        url: "https://framer.cloud/uDPcs",
        date: "2019-8-27",
        tag: ["#StickyHeader", "#ScrollComponent", "#Utils.modulate", "#Default.Animation", "#FlowComponent", "#Array", "#animate", "#change:","#stateCycle"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/bGbgoKb/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 43,
        type: 8,
        title: "FAB(Floating Action Button)III",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_43.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_43.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f43.gif",
        desc: "FAB를 탭하면 바 알림 형태로 애니메이션 되고 알림 숫자가 있는 경우 탭을 하면 상세 화면으로 전환",
        used: "활용영역 : 메인 페이지, FAB, 알림창",
        url: "https://framer.cloud/UQYSW",
        date: "2019-8-27",
        tag: ["#states", "#Default.Animation", "#IgnoreEvents", "#animate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/vYBgejV/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 42,
        type: 8,
        title: "FAB(Floating Action Button)II",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_42.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_42.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f42.gif",
        desc: "진입시 FAB등장 애니메이션. FAB버튼 액션을 통해 리스트 필터링 인터랙션",
        used: "활용영역 : 연락처, FAB, 상태알림 토스트",
        url: "https://framer.cloud/XFCyT",
        date: "2019-8-27",
        tag: ["#Default.Animation", "#ScrollComponent", "#Array", "#switchInstant", "#scrollToPoint", "#animate", "#Utils.delay", "#ignoreEvents"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/MWgJEEe/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 41,
        type: 9,
        title: "Bottom Navigation",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_41.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_41.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f41.gif",
        desc: "하단 네비게이션을 통해 연락처, 최근통화, 다이얼, 설정 페이지로 이동. 특정화면(다이얼)을 제외한 다른화면은 T ARS FAB 배치",
        used: "활용영역 : 네비게이션, 하단메뉴, FAB",
        url: "https://framer.cloud/tQYrA",
        date: "2019-8-27",
        tag: ["#Default.Animation", "#bringToFront", "#Array"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/mdbRBWG/?height=800&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 40,
        type: 10,
        title: "Sticky Header",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_40.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_40.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f40.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_39.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_03.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f39.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_38.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_38.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f38.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_37.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_37.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f37.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_38a.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_02.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f36.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_36.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_36.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f35.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_35.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_35.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f34.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_34.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_34.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f33.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_33.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_33.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f32.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_32.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_32.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f31.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_30.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_15.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f30.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_29.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_07.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f29.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_28.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_28.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f28.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_27.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_27.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f27.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_26.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_26.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f26.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_25.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_25.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f25.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_24.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_24.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f24.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_23.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_23.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f23.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_22.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_22.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f22.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_21.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_21.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f21.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_20.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_20.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f20.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/fs_19.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_19.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f19.gif",
        desc:
          "메인화면 스크롤 패턴과 하단 바에 bottomSheet 모듈을 적용하여 스와이프하여 끌어올리기 가능",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인페이지 / Bottom Sheet / Category List",
        url: "https://framer.cloud/zetyq",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Module", "#states", "#sendToBack"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/wZLRKx/?height=265&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 18,
        type: 9,
        title: "Tab Bar Navigation",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_18.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_18.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f18.gif",
        desc:
          "탭바 모듈을 활용하여 상단 메뉴바 네비게이션 구성. 탭선택에 따라 하단 화면의 스크롤이동",
        used: "활용영역 : 서브탭메뉴 / 페이징 / UI Flow",
        url: "https://framer.cloud/VKDBi",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Module", "#for in", "#sendToBack"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/QPXzyz/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 17,
        type: 4,
        title: "Page Swipe",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_17.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_17.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f17.gif",
        desc:
          "메인 화면 컨텐츠 구성. 배너 영역 페이징과 검색창 고정 및 페이지 스크롤",
        used: "활용영역 : 컨텐츠 피드 리스트 / 페이징 / 메인 페이지",
        url: "https://framer.cloud/qPiZn",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Module", "#for in", "#sendToBack"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/BEgvKV/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 16,
        type: 2,
        title: "Parallax Scroll",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_16.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_16.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f16.gif",
        desc:
          "패럴랙스 스크롤 패턴, 택스트와 배경을 분리하여 시간차를 두고 움직임. 상단바 탭시 최상단으로 이동",
        used: "활용영역 : 컨텐츠 피드 리스트 / 메인 페이지",
        url: "https://framer.cloud/bDrNm",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#scrollToPoint", "#Array", "#for in", "#Utils.round", "#parallax"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/ROzERj/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 15,
        type: 10,
        title: "Music Player II (Flow)",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_15.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_15.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f15.gif",
        desc:
          "음악 리스트에서 뮤직플레이어 화면으로 이동. 뮤직 플레이어의 컨트롤 기능 포함(슬라이더, 이전, 다음 등)",
        used: "활용영역 : 뮤직서비스, 플레이어",
        url: "https://framer.cloud/BnZeL",
        date: "2018-4-20",
        tag: ["#ScrollComponent","#FlowComponent", "#module", "#Array", "#draggable", "#Utils.round", "#states", "#for in", "#if else", "#change:"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/VNJqKW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 14,
        type: 10,
        title: "Music Player I",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_14.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_14.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f14.gif",
        desc:
          "진입 시 음악 재생 이전곡/다음곡 가능 뮤직 리스트 탭시 해당 노래 재생",
        used: "활용영역 : 뮤직서비스, 플레이어",
        url: "https://framer.cloud/rgdGR",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#module", "#Array", "#draggable", "#Utils.round", "#states", "#for in", "#if else", "#idx"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/NmZeRE/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 13,
        type: 2,
        title: "Contents Scrolling",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_13.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_13.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f13.gif",
        desc:
          "스크롤시 스크롤 Y값에 따른 배경 이미지 애니메이션",
        used: "활용영역 : 상세화면",
        url: "https://framer.cloud/vvVaY",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Utils.modulate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/GLbPNQ/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 12,
        type: 7,
        title: "Sprite Animation",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_12.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_12.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f12.gif",
        desc:
          "스프라이트 이미지를 활용한 로딩 애니메이션, 로딩 후에 다음 페이지로 이동",
        used: "활용영역 : Splash, Loading 화면",
        url: "https://framer.cloud/Sgkso",
        date: "2018-4-20",
        tag: ["#FlowComponent", "#states", "#Utils.delay", "#stateCycle"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/wZLRgY/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 11,
        type: 8,
        title: "FAB (Floating Action Button)",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_11.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_11.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f11.gif",
        desc:
          "플로팅 액션 버튼(FAB) 탭시 메뉴 확장",
        used: "활용영역 : FAB, 메인화면, 네비게이션",
        url: "https://framer.cloud/lyFIZ",
        date: "2018-4-20",
        tag: ["#Defaults", "#for in", "#states", "#stateCycle"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/wZLRJY/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 10,
        type: 6,
        title: "Dynamic Banner",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_10.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_10.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f10.gif",
        desc:
          "스크롤시 배너 이미지 요소가 화면 밖에서 안으로 이동",
        used: "활용영역 : 메인화면, 배너",
        url: "https://framer.cloud/Isvzm",
        date: "2018-4-20",
        tag: ["#ScrollComponent", "#Utils.modulate"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/XQLogX/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 9,
        type: 6,
        title: "Swipe Banner",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_09.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_09.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f09.gif",
        desc:
          "이미지가 벗겨지는 트랜지션 적용. 페이지에 따라 하단 바 길이 애니메이션",
        used: "활용영역 : 메인화면, 배너, 페이징",
        url: "https://framer.cloud/eDKyR",
        date: "2018-4-20",
        tag: ["#PageComponent", "#for in", "#change:", "#Utils.modulate", "#Array"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/GLbPEd/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 8,
        type: 6,
        title: "Objects Banner",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_08.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_08.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f08.gif",
        desc: 
          "이미지와 배경을 분리하여 트랜지션 적용",
        used: "활용영역 : FAB, 메인화면, 네비게이션",
        url: "//codepen.io/ugen/embed/MRMZvW",
        date: "2018-4-20",
        tag: ["#PageComponent", "#for in", "#Array", "#Utils.modulate", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/wZLRJY/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 7,
        type: 5,
        title: "Screen Flow",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_07.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_05.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f07.gif",
        desc:
          "화면 영역 탭시 다음 스크린으로 이동. 뒤로가기 버튼 탭시 이전페이지로 이동",
        used: "활용영역 : 화면단위 Flow 확인",
        url: "https://framer.cloud/wkZiY",
        date: "2018-4-20",
        tag: ["#FlowComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/PgrXKB/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 2,
        title: "Basic Scroll",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_02.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f06.gif",
        desc:
          "Appbar+기본 화면 스크린 구현",
        used: "활용영역 : 메인화면, 서브화면, 컨텐츠 피드 리스트",
        url: "https://framer.cloud/oDSkN",
        date: "2018-4-20",
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/NmZeao/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 4,
        title: "Basic Page",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_04.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f05.gif",
        desc:
          "페이지 스와이프와 탭메뉴 항목 터치로 컨텐츠 영역 이동",
        used: "활용영역 : 메인화면, 서브화면, 탭메뉴",
        url: "https://framer.cloud/GsTEt",
        date: "2018-4-20",
        tag: ["#PageComponent","#for in", "#change:", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/LvKMOL/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 1,
        title: "Like/Heart Interaction",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_04.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f04.gif",
        desc:
          "하트 탭시 피드백 애니메이션 적용",
        used: "활용영역 : 좋아요, 하트 버튼 터치피드백",
        url: "https://framer.cloud/wocaT",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/rbEopx/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 3,
        title: "Random Image Splash",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_03.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f03.gif",
        desc:
          "스플래시 배경 렌덤으로 노출. 5초간 배경 애니메이션 진행후, 홈화면 진입",
        used: "활용영역 : 스플래시 화면",
        url: "https://framer.cloud/dVLZa",
        date: "2018-4-20",
        tag: ["#Array", "#Utils.randomChoice", "Utils.delay"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLdW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 2,
        title: "Contents Scroll",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/ft_02.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f02.gif",
        desc:
          "세로 스크롤 페이지안에서 가로 스크롤 가능",
        used: "활용영역 : 메인화면 스크롤",
        url: "https://framer.cloud/oGUNk",
        date: "2018-4-20",
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/VNJqQr/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 1,
        title: "Bookmark Toggle Interaction",
        jpgImg: "http://ux.skplanet.com/ic/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/framer_01.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    framerX: [],
    lottie: [
      {
        id: 5,
        type: 7,
        title: "지문인식 Animation",
        jpgImg: "http://ux.skplanet.com/ic/images/ls_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/lottie_05.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/l05.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/ls_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/lt_04.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/l04.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/ls_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/lottie_03.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/l03.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/ls_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/lt_02.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/l02.gif",
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
        jpgImg: "http://ux.skplanet.com/ic/images/ls_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/ic/images/lt_01.jpg",
        gifImg: "http://ux.skplanet.com/ic/images/l01.gif",
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
      
    ],
    html: [
      
    ]
  }
};

export default itemList
