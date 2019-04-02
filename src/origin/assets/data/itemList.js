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
        desc: "모듈을 활용하여 스크롤 중에 탭영역이 상단에 고정",
        used: "활용영역 : 메인 페이지",
        url: "https://framer.cloud/dYWKT",
        date: "2018-4-20",
        tag: ["#StickyHeader", "#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/ZZYdQw/?height=265&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#ScrollComponent", "#areaToggle"],
        source:
          '<iframe height="600" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/mgyZgx/?height=265&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="yes" title="yEKvxZ" src="//codepen.io/ugen/embed/dLPxbV/?height=265&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/ugen/embed/YMPmXe/?height=265&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#ScrollComponent", "#randomNumber", "#randomChoice"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#PageComponent", "#ScrollComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
        tag: ["#ScrollComponent", "#FlowComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 29,
        type: 7,
        title: "Floating Action Button",
        jpgImg: "https://prodigk.github.io/ic_data/images/fs_29.jpg",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_07.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f29.gif",
        desc:
          "스크롤 시 FAB버튼 축소 / 최상단으로 스크롤시 FAB버튼 확장 / 스테이터스바 탭시 최상단으로 스크롤 이동",
        used: "활용영역 : FAB / 탭버튼",
        url: "https://framer.cloud/dXxgL",
        date: "2018-4-20",
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 28,
        type: 7,
        title: "Notification UI",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/framer_13.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f28.gif",
        desc:
          "5초 간격으로 하단 카드 노티 애니메이션 / 스크롤하여 카드 내용 확인후에는 애니메이션 정지",
        used: "활용영역 : 메인페이지 / 노티피케이션",
        url: "https://framer.cloud/hwQUM",
        date: "2018-4-20",
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 27,
        type: 7,
        title: "Notification UI",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f27.gif",
        desc:
          "5초 간격으로 하단 카드 노티 애니메이션 / 스크롤하여 카드 내용 확인후에는 애니메이션 정지",
        used: "활용영역 : 메인페이지 / 노티피케이션",
        url: "https://framer.cloud/hwQUM",
        date: "2018-4-20",
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 26,
        type: 7,
        title: "Notification UI",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f26.gif",
        desc:
          "5초 간격으로 하단 카드 노티 애니메이션 / 스크롤하여 카드 내용 확인후에는 애니메이션 정지",
        used: "활용영역 : 메인페이지 / 노티피케이션",
        url: "https://framer.cloud/hwQUM",
        date: "2018-4-20",
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 25,
        type: 7,
        title: "Notification UI",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f25.gif",
        desc:
          "5초 간격으로 하단 카드 노티 애니메이션 / 스크롤하여 카드 내용 확인후에는 애니메이션 정지",
        used: "활용영역 : 메인페이지 / 노티피케이션",
        url: "https://framer.cloud/hwQUM",
        date: "2018-4-20",
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }, 
      {
        id: 24,
        type: 7,
        title: "Notification UI",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/f24.gif",
        desc:
          "5초 간격으로 하단 카드 노티 애니메이션 / 스크롤하여 카드 내용 확인후에는 애니메이션 정지",
        used: "활용영역 : 메인페이지 / 노티피케이션",
        url: "https://framer.cloud/hwQUM",
        date: "2018-4-20",
        tag: ["#PageComponent"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/zbbEXL/?height=627&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    framerX: [],
    lottie: [
      {
        id: 6,
        type: 4,
        title: "로티View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag3", "#tag2"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 3,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag4", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 1,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag1", "#tag2"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    principle: [
      {
        id: 6,
        type: 11,
        title: "프린서플iew Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 3,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    sketch: [
      {
        id: 6,
        type: 11,
        title: "스케치View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag1", "#tag3"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 3,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag2", "#tag1"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 1,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag1", "#tag5"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 1,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag1", "#tag4"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 1,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    html: [
      {
        id: 6,
        type: 11,
        title: "HTMLView Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 3,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag1", "#tag2"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag4", "#tag1"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 1,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#tag1", "#tag2"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 9,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 9,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 9,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 5,
        title: "View Screen",
        jpgImg: "https://prodigk.github.io/ic_data/images/photo.png",
        jpgImg_s: "https://prodigk.github.io/ic_data/images/photo_s.jpg",
        gifImg: "https://prodigk.github.io/ic_data/images/move.gif",
        desc:
          "페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 애니메이션을 구현하여 사용자에게 명확한 피드백을 제공한다",
        used: "활용영역 : 상세페이지/읽기페이지",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#ScrollComponent", "#states"],
        source:
          '<iframe height="1050" style="width: 100%;" scrolling="no" title="yEKvxZ" src="//codepen.io/diget/embed/yEKvxZ/?height=265&theme-id=0&default-tab=css" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ]
  }
};

export default itemList
