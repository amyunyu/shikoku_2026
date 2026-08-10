/*
 * 四國，秋日慢行｜GitHub Pages 版
 *
 * 所有行程內容都保存在下方的 days 陣列中，沒有壓縮或混淆。
 * 要修改時間、標題、說明或地圖，只需編輯對應欄位即可。
 */

function mapSearch(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}

const days = [
  {
    date: "11/15",
    weekday: "日",
    place: "琴平",
    title: "從讚岐，走進秋天",
    lodging: "UDON na HOTEL 琴平",
    lodgingMap: "https://maps.app.goo.gl/XEdyhmtYpuHk5QWG7",
    lodgingNote: "隔日早餐已包含",
    stops: [
      {
        time: "12:20",
        title: "高松機場・取車",
        eyebrow: "旅程起點",
        summary: "完成入境與租車手續，先用一段輕鬆車程適應右駕。",
        detail: "租車資訊：TOYOTA Rent a Car 高松空港店。從高松機場往北約 700m（APAHOTEL 斜前方），抵達後於國內線到達大廳前櫃檯受理，再由接送車送往店鋪。現場依接待順序辦理手續。\n\n第一天不安排長距離移動。完成入境與租車手續後直接前往琴平，讓身體慢慢進入四國自駕的節奏。",
        highlights: ["TOYOTA Rent a Car 高松空港店取車","確認 ETC、導航與油種", "高松機場至琴平約 40–50 分鐘", "11月傍晚較早天黑，不追加遠程景點"],
        note: "實際時間仍要依航班確認。",
        map: mapSearch("高松機場"),
        tags: ["移動", "取車"],
        status: "confirmed"
      },
      {
        time: "15:00",
        title: "UDON na HOTEL 琴平",
        eyebrow: "入住",
        summary: "Booking，含早餐",
        map: "https://maps.app.goo.gl/XEdyhmtYpuHk5QWG7",
        status: "confirmed"
      },
      {
        time: "15:30",
        title: "金刀比羅宮表參道",
        eyebrow: "午後散步",
        nearby: [
          {
            name: "平岡精肉店",
            note: "金毘羅街道上的老店，逛參道時可順路買來邊走邊吃。",
            map: "https://maps.app.goo.gl/hMiHsLodfqbWmugH8"
          },
          {
            name: "Kotohira Stationery Store 琴平文具店",
            note: "金毘羅街道上，獨家的香川縣紙膠帶。",
            map: "https://maps.app.goo.gl/sFA9mAjk1uUc4PF26"
          },
          {
            name: "旧金毘羅大芝居(金丸座)",
            note: "金刀比羅表參道旁，建於1835年現存日本最古老的歌舞伎劇場，門票500。",
            map: "https://maps.app.goo.gl/WrdpYbcGhcQYmzf59"
          }
        ],
        summary: "沿石階與木造店舖慢慢走，第一天不以攻頂為目標。",
        detail: "表參道是琴平最適合用來展開旅程的地方。下午斜光會在石階、屋簷和老店招牌之間形成漂亮層次；依抵達時間決定走到大門或御本宮。",
        highlights: ["JR琴平駅可以拍照","表參道散步約 45–60 分鐘"],
        map: "https://maps.app.goo.gl/J4BbfVM9oZCV2jt88",
        tags: ["逛街", "攝影"],
        status: "flex"
      },
      {
        time: "晚餐",
        title: "琴平晚餐",
        restaurants: [
          {
            name: "Musashi 手打うどん むさし",
            map: "https://maps.app.goo.gl/9fUeT7x5AmDs9t5d6",
            note: "Tablog 百名店 2024"
          },
          {
            name: "Tanakaya 焼鳥・骨付鳥 田中屋",
            map: "https://maps.app.goo.gl/powo67dESZgjhcLY8",
            note: "香川代表性骨付鳥選項，不一定選這家"
          }
        ],
        summary: "入住後把車停好，晚餐前後再看一次安靜的參道燈影。",
        detail: "飯店位於琴平街區，適合入住後步行活動。夜間的表參道比白天安靜，暖色燈光與木造建築很適合拍攝。",
        highlights: ["住宿：UDON na HOTEL 琴平"],
        map: "https://maps.app.goo.gl/XEdyhmtYpuHk5QWG7",
        tags: ["住宿", "夜散步", "晚餐"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/16",
    weekday: "一",
    place: "脇町",
    title: "白壁商街，秋光緩行",
    lodging: "PAYSAGE MORIGUCHI",
    lodgingMap: "https://maps.app.goo.gl/HggrojLCHYgYS3dB6",
    stops: [
      {
  time: "08:00",
  title: "琴平清晨・飯店早餐",
  eyebrow: "晨間",
  summary: "早餐後整理行李，準備完成金刀比羅宮完整參拜。",
  detail: "利用清晨較少人潮的時段，從琴平街區前往金刀比羅宮。今天不只是散步，而是安排完整登拜路線。",
  highlights: [
    "飯店早餐已包含",
    "建議穿著好走鞋",
    "退房前整理行李"
  ],
  map: "https://maps.app.goo.gl/zo5SpDCFfZod2QgP7",
  tags: ["早餐", "準備"],
  status: "confirmed"
},
      {
  time: "09:00",
  title: "金刀比羅宮・完整參拜",
  eyebrow: "清晨登拜",
  summary: "從表參道開始，走過御本宮，再前往奧社，完成琴平最完整的參拜路線。",
  detail: "金刀比羅宮正式參拜路線從表參道開始。今天安排完整登拜，不追求速度，慢慢走過石階、門前町、御本宮與更深處的奧社。清晨光線柔和，也是拍攝石階、杉木與建築細節的最佳時段。",
  highlights: [
    "表參道 → 大門 → 御本宮 → 奧社",
    "完整往返約 2.5–3 小時",
    "石階較多，建議穿好走鞋",
    "途中補水與休息，不以趕路為目標"
  ],
  nearby: [
    {
    name: "Nazuna-dō 七十七堂",
    note: "位於參道77段附近，適合作為登拜前後的短暫休息點。",
    map: "https://maps.app.goo.gl/JWWMWAWdgtRVu2gy8"
    },
    {
      name: "五人百姓",
      note: "位於大門附近的傳統商家，可作為登拜途中短暫停留。",
  maps: [
    "https://maps.app.goo.gl/3Q4XcnS8S2T5aaUx9",
    "https://maps.app.goo.gl/81kYKbxtLyr6WNoF6"
  ]
    },
    {
            name: "旧金毘羅大芝居(金丸座)",
            note: "金刀比羅表參道旁，建於1835年現存日本最古老的歌舞伎劇場，門票500。",
            map: "https://maps.app.goo.gl/WrdpYbcGhcQYmzf59"
          }
  ],
  map: "https://maps.app.goo.gl/J4BbfVM9oZCV2jt88",
  tags: ["神社", "參拜", "攝影"],
  status: "confirmed"
      },
      {
  time: "12:30",
  title: "琴平出發・午餐休息",
  eyebrow: "移動途中",
  summary: "完成金刀比羅宮參拜後，依時間選擇琴平用餐或沿途道之駅休息。",
  detail: "今天不固定單一餐廳，保留參拜時間彈性。若下山較早，可在琴平街區用餐；若希望早點前往脇町，則選擇沿途道之駅簡單休息。",
  highlights: [
    "琴平市街午餐候選",
    "道之駅補給與休息",
    "下午以脇町散步為主"
  ],
  nearby: [
    {
      name: "道の駅 空の夢もみの木パーク",
      note: "適合作為琴平往脇町方向的補給停留。",
      map: "https://maps.app.goo.gl/ST7ezFZWen4H6N8d7"
    },
    {
      name: "道の駅 たからだの里さいた",
      note: "可補給地方物產、飲料與簡單餐食。",
      map: "https://maps.app.goo.gl/5m8TxkPnPRY89xJZ7"
    },
    {
      name: "吉野川サービスエリア（下り）",
      note: "若選擇較快速移動，可作為途中停靠點。",
      map: "https://maps.app.goo.gl/qRDrMrm4coGAM9oj7"
    }
  ],
  tags: ["午餐", "移動", "道の駅"],
  status: "flex"
      },
      {
        time: "14:30",
        title: "脇町・うだつの町並み",
        eyebrow: "今日主景",
        summary: "走進江戶至明治的白壁商家街，把午後留給屋簷與斜陽。",
        detail: "吉野川沿岸的重要交通與商業據點，從脇城城下町發展而來，並因藍染產業的繁榮而累積財富。如今仍保存85棟江戶中期至昭和初期的傳統建造物，白壁町家與瓦頂うだつ交織成完整的歷史街景。  
漫步其中，可以看見商人町家的繁盛痕跡：兩側屋簷高低錯落，白漆喰牆面映著秋日斜陽，防火與象徵財力的「うだつ」成為這條街最鮮明的記憶。",
        nearby: [
    {
    name: "脇町劇場 オデオン座",
    note: "建於1934年的昭和初期劇場，外觀帶有西洋摩登風格，內部保留旋轉舞台與奈落等傳統劇場構造。曾經歷歌舞伎、浪曲、電影放映的繁盛年代，也因山田洋次電影《虹をつかむ男》而重新受到保存。如今修復後成為脇町老街中，連結昭和記憶與地方文化的重要場所。",
    map: "https://maps.app.goo.gl/xWsBRb42iNp7dLD87"
    }
  ],
        highlights: ["商人町家與白壁街景", "下午三點後屋簷光影佳", "咖啡店與藍染店可視營業彈性停留"],
        map: mapSearch("脇町うだつの町並み"),
        tags: ["老街", "建築", "攝影"],
        status: "confirmed"
      },
      {
        time: "16:30",
        title: "入住 PAYSAGE MORIGUCHI",
        eyebrow: "住宿。晚餐",
        summary: "提早回到古民家旅宿，讓住宿本身也成為今天的一段風景。",
        detail: "這晚不再安排遠程活動。入住後可在老街黃昏與夜色間散步，晚餐依旅宿建議或附近店家決定。",
        restaurants: [
          {
            name: "Punta",
            map: "https://maps.app.goo.gl/Gfc3h7GuRP2mW5pM8",
            note: "義大利麵，住宿附近"
          },
          {
            name: "元 手打ちうどん元",
            map: "https://maps.app.goo.gl/WCbEd6tXihfdER2V6",
            note: "烏龍麵，距離住宿走路15分鐘"
          },
          {
            name: "Maharaja Spice マハラジャスパイス",
            map: "https://maps.app.goo.gl/kJHPCtmJjFy9YqRd8",
            note: "印度咖哩，要開車前往"
          },
          {
            name: "麺屋・國丸 脇町店",
            map: "https://maps.app.goo.gl/X3WLndDHTYAHNuBr6",
            note: "拉麵，要開車前往"
          }
        ],
        highlights: ["古民家設計旅宿", "建議天黑前辦理入住", "晚餐選擇需再確認營業日"],
        map: "https://maps.app.goo.gl/S7dpoYK4mrBMiJTm7",
        tags: ["住宿", "古民家"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/17",
    weekday: "二",
    place: "祖谷・高知",
    title: "穿過山河，抵達土佐",
    lodging: "OMO7 高知 by 星野集團",
    lodgingMap: "https://maps.app.goo.gl/saWfbKz5Zh3PhBF17",
    stops: [
      {
        time: "08:30",
        title: "脇町出發・大步危方向",
        eyebrow: "山路移動",
        summary: "從商家町離開，逐漸進入四國山地與吉野川峽谷。",
        detail: "這一天是全程山區核心日。沿途不追求大量停點，將時間留給大步危、祖谷蔓橋和落合集落。",
        highlights: ["出發前加滿油並確認天氣", "山區留意會車與落葉", "傍晚前離開祖谷深處"],
        map: "https://maps.app.goo.gl/MyQtCJWMRTMkGG4z5",
        tags: ["山路", "移動"],
        status: "confirmed"
      },
      {
        time: "11:00",
        title: "大步危・午餐",
        eyebrow: "午餐候選",
        summary: "在峽谷區先吃午餐，再決定遊船或展望停留。",
        detail: "午餐以當日營業與抵達時間決定。候選包含 Cafe & Jibie、Mori no Kumasan，以及おのみ家。",
        highlights: ["Cafe & Jibie 位於道之驛大步危", "森のくまさん適合山間用餐", "保留候補避免臨時休業"],
        map: "https://maps.app.goo.gl/Gnf69LQdjonGTZRF7",
        tags: ["午餐", "峽谷"],
        status: "flex"
      },
      {
        time: "13:00",
        title: "大步危峽",
        eyebrow: "溪谷",
        summary: "看吉野川切出的深谷與秋季山色，遊船依時間與天候決定。",
        detail: "大步危的重點是河谷尺度與岩壁層次。若搭遊船，要同步縮短其他停留；不搭船也可從展望處欣賞峽谷。",
        highlights: ["遊船屬彈性選項", "預留 45–90 分鐘", "雨後與低溫注意甲板保暖"],
        map: mapSearch("大步危峽觀光遊船"),
        tags: ["峽谷", "紅葉", "攝影"],
        status: "flex"
      },
      {
        time: "14:30",
        title: "祖谷蔓橋",
        eyebrow: "祖谷",
        summary: "走過藤蔓橋與溪谷，把祖谷最具代表性的景觀留在午後。",
        detail: "蔓橋周邊適合慢走，但不必把所有祖谷地標都塞入。原本的小便小僧停點已讓位給更有聚落文化感的落合集落。",
        highlights: ["橋面有縫隙，穿止滑鞋", "停留約 45–60 分鐘", "現場視人流調整過橋時間"],
        map: mapSearch("祖谷蔓橋"),
        tags: ["溪谷", "文化", "攝影"],
        status: "confirmed"
      },
      {
        time: "15:45",
        title: "落合集落展望所",
        eyebrow: "山村景觀",
        summary: "從山腰看傳統聚落沿斜坡展開，作為祖谷行程的收束。",
        detail: "落合集落比短暫打卡更符合這趟旅行：山村生活、耕地與屋舍層疊在陡坡上，具有清楚的地方歷史感。",
        highlights: ["建議停留 30–40 分鐘", "避免天黑後仍留在山區", "展望道路留意狹窄路段"],
        map: mapSearch("落合集落展望所"),
        tags: ["聚落", "攝影", "山路"],
        status: "confirmed"
      },
      {
        time: "19:00",
        title: "抵達 OMO7 高知",
        eyebrow: "住宿",
        summary: "離開祖谷後直達高知，連住兩晚、不再搬行李。",
        detail: "抵達後以入住與晚餐為主。高知連住兩晚能讓隔日城市文化行程更從容。",
        highlights: ["住宿第一晚", "晚餐依抵達時間就近安排", "隔日不用整理行李"],
        map: mapSearch("OMO7 高知 by 星野集團"),
        tags: ["住宿", "晚餐"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/18",
    weekday: "三",
    place: "高知",
    title: "城下町與土佐的日常",
    lodging: "OMO7 高知 by 星野集團",
    lodgingMap: mapSearch("OMO7 高知 by 星野集團"),
    stops: [
      {
        time: "09:00",
        title: "高知城",
        eyebrow: "城下町",
        summary: "從追手門走向現存天守，看石垣、木造建築與秋日銀杏。",
        detail: "高知城是今天的文化主角。追手門與天守可同框，登城後也能理解土佐城下町的空間。",
        highlights: ["停留約 1–1.5 小時", "追手門前適合拍建築同框", "城內階梯較陡"],
        map: mapSearch("高知城"),
        tags: ["城郭", "歷史", "攝影"],
        status: "confirmed"
      },
      {
        time: "11:00",
        title: "帯屋町・弘人市場",
        eyebrow: "街區與午餐",
        summary: "沿商店街走到市場，用藁燒鰹魚和土佐小菜認識高知日常。",
        detail: "弘人市場不只是一餐，也是高知生活感最集中的場所。可先逛帯屋町，再依座位與人潮選攤。",
        highlights: ["鰹魚藁燒是首選", "市場採共享座位", "午餐後可補逛地方雜貨"],
        map: mapSearch("ひろめ市場 高知"),
        tags: ["市場", "午餐", "散步"],
        status: "confirmed"
      },
      {
        time: "14:00",
        title: "牧野植物園",
        eyebrow: "午後山林",
        summary: "在山坡庭園、溫室與建築之間散步，感受高知較安靜的一面。",
        detail: "牧野植物園不是單純看花，而是一段結合植物、建築與山林光影的散步。秋季氣氛與這趟旅行的調性很合。",
        highlights: ["建議停留約 2 小時", "園區有坡度，穿好走鞋", "留意閉園時間"],
        map: mapSearch("高知縣立牧野植物園"),
        tags: ["植物", "建築", "攝影"],
        status: "confirmed"
      },
      {
        time: "16:15",
        title: "竹林寺",
        eyebrow: "五台山",
        summary: "在五重塔、苔庭與古寺空間中收束下午。",
        detail: "竹林寺就在牧野植物園附近，適合合併安排。是否再前往五台山展望點，依當天時間和能見度決定。",
        highlights: ["四國八十八所第 31 番", "苔庭與五重塔值得慢看", "桂濱不列為必要行程"],
        map: mapSearch("竹林寺 高知"),
        tags: ["寺院", "庭園"],
        status: "confirmed"
      },
      {
        time: "晚上",
        title: "OMO7 高知・第二晚",
        eyebrow: "住宿",
        summary: "回到同一間飯店休息，晚餐保留給土佐料理。",
        detail: "連住第二晚，不需要搬行李。若中午已吃弘人市場，晚上可改選較安靜的土佐料理或飯店周邊餐廳。",
        highlights: ["住宿第二晚", "不安排夜間長途駕駛", "整理隔日海岸線行程"],
        map: mapSearch("OMO7 高知 by 星野集團"),
        tags: ["住宿", "晚餐"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/19",
    weekday: "四",
    place: "宇和島",
    title: "沿著土佐灣，向南予去",
    lodging: "JR Hotel Clement 宇和島",
    lodgingMap: "https://maps.app.goo.gl/p46yQPnAb1XfGcmP8",
    stops: [
      {
        time: "09:00",
        title: "OMO7 高知退房",
        eyebrow: "海岸線移動",
        summary: "離開高知城下町，沿土佐灣向西南前進。",
        detail: "今天純駕駛約三小時，但景點密度刻意維持舒適。主線已以使用者提供的地圖路線為準。",
        highlights: ["高知至宇和島約 161 公里", "行經縣道 36 號與國道 56 號", "不額外加入大型繞路"],
        map: "https://maps.app.goo.gl/BaSHcdv3q6QNAvaY9",
        tags: ["移動", "海岸"],
        status: "confirmed"
      },
      {
        time: "10:00",
        title: "鳴無神社",
        eyebrow: "海上參道",
        summary: "從朱紅社殿望向土佐灣，走一段面海而行的神社參道。",
        detail: "鳴無神社的魅力不是紅葉，而是神社與海的方向關係。上午光線乾淨時，石階、鳥居和海面很適合攝影。",
        highlights: ["停留約 45–60 分鐘", "留意潮濕石階", "保持安靜並尊重祭祀空間"],
        map: mapSearch("鳴無神社 須崎"),
        tags: ["神社", "海景", "攝影"],
        status: "confirmed"
      },
      {
        time: "11:45",
        title: "久禮大正町市場",
        eyebrow: "港町午餐",
        summary: "吃現烤鰹魚、逛港町小店，在久禮停留一個完整午餐時段。",
        detail: "大正町市場兼具午餐與地方生活觀察，適合比單純用餐多留一點時間。離開前可視需要到道之驛なかとさ補給。",
        highlights: ["首選鰹魚藁燒", "停留約 1–1.5 小時", "確認市場當日營業狀況"],
        map: mapSearch("久礼大正町市場"),
        tags: ["市場", "午餐", "港町"],
        status: "confirmed"
      },
      {
        time: "17:00",
        title: "入住宇和島・鯛めし晚餐",
        eyebrow: "住宿",
        summary: "抵達車站旁飯店後停止開車，用宇和島鯛めし結束移動日。",
        detail: "JR Hotel Clement 位於宇和島站旁。晚餐可選かどや或ほづみ亭，實際以營業與候位狀況決定。",
        highlights: ["住宿第一晚", "晚餐首選宇和島式鯛めし", "飯店位置方便步行用餐"],
        map: "https://maps.app.goo.gl/p46yQPnAb1XfGcmP8",
        tags: ["住宿", "鯛めし"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/20",
    weekday: "五",
    place: "宇和島",
    title: "城與溪谷，南予的秋日",
    lodging: "JR Hotel Clement 宇和島",
    lodgingMap: "https://maps.app.goo.gl/p46yQPnAb1XfGcmP8",
    stops: [
      {
        time: "09:00",
        title: "宇和島城",
        eyebrow: "現存天守",
        summary: "從城下慢慢上山，在小巧天守與港灣視野間認識南予。",
        detail: "宇和島城規模不大，但登城路線、石垣和現存天守很有地方感。早上參觀可避開午後行程壓力。",
        highlights: ["登城路段有石階", "停留約 1.5 小時", "山頂可看宇和島市區"],
        map: mapSearch("宇和島城"),
        tags: ["城郭", "歷史"],
        status: "confirmed"
      },
      {
        time: "11:00",
        title: "天赦園",
        eyebrow: "大名庭園",
        summary: "在池泉、藤棚與借景間，接續宇和島伊達家的歷史。",
        detail: "天赦園與宇和島城適合排在同一上午。秋季重點是庭園結構與安靜散步，而非追求大面積紅葉。",
        highlights: ["停留約 45–60 分鐘", "與宇和島城距離近", "依天候調整順序"],
        map: mapSearch("天赦園"),
        tags: ["庭園", "歷史"],
        status: "confirmed"
      },
      {
        time: "12:30",
        title: "宇和島鯛めし",
        eyebrow: "午餐",
        summary: "如果前一晚尚未吃到，今天正式安排宇和島式生鯛魚片拌飯。",
        detail: "宇和島式鯛めし使用生鯛魚片、蛋與醬汁拌飯，和松山常見的炊飯型不同。若前晚已吃，可以改選其他南予料理。",
        highlights: ["かどや或ほづみ亭為候選", "熱門時段可能候位", "可與松山版本做比較"],
        map: mapSearch("宇和島 鯛めし かどや"),
        tags: ["午餐", "地方料理"],
        status: "flex"
      },
      {
        time: "14:00",
        title: "滑床溪谷",
        eyebrow: "午後彈性",
        summary: "走入花崗岩溪谷與森林清流；若天候不佳則留在宇和島。",
        detail: "滑床溪谷是目前 Day 6 的第一順位自然方案，但尚未完全定案。它比安排內子往返更順；內子已留到隔日北上松山途中。",
        highlights: ["宇和島出發約 50 分鐘", "以短程散步為主，不深入健行", "雨天、落葉濕滑或時間不足則取消"],
        note: "此卡目前標示為彈性，之後可替換為成川溪谷。",
        map: mapSearch("滑床渓谷"),
        tags: ["紅葉", "溪谷", "山路"],
        status: "flex"
      },
      {
        time: "晚上",
        title: "宇和島・第二晚",
        eyebrow: "住宿",
        summary: "回到同一間飯店，為隔日內子與下灘路線保留體力。",
        detail: "第二晚不搬行李。回程時間以不摸黑走山路為原則，晚餐回到車站周邊處理。",
        highlights: ["住宿第二晚", "整理隔日退房與行李", "確認下灘日落與天氣"],
        map: "https://maps.app.goo.gl/p46yQPnAb1XfGcmP8",
        tags: ["住宿", "休息"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/21",
    weekday: "六",
    place: "內子・下灘・松山",
    title: "從白壁町家，走向伊予灘",
    lodging: "REF 松山市站 by VESSEL",
    lodgingMap: mapSearch("REF 松山市站 by VESSEL"),
    stops: [
      {
        time: "08:30",
        title: "宇和島退房・北上",
        eyebrow: "移動日",
        summary: "沿南予向北，把歷史町並與海邊夕陽串成一條路。",
        detail: "內子不再安排為宇和島往返，而是放在前往松山的順路日，避免折返並保留完整散步時間。",
        highlights: ["行李全程留在車上", "出發前確認下灘日落時間", "週六預留停車與人潮時間"],
        map: mapSearch("宇和島 到 內子"),
        tags: ["移動", "南予"],
        status: "confirmed"
      },
      {
        time: "10:00",
        title: "內子・八日市護國町並",
        eyebrow: "歷史町並",
        summary: "沿白壁、木蠟商家與細長街道慢走，感受江戶到明治的地方繁榮。",
        detail: "內子是整趟最符合老街與建築偏好的停點之一。可依開館狀況安排上芳我邸、內子座，並在町內吃午餐。",
        highlights: ["八日市護國重要傳統建造物群", "木蠟資料館上芳我邸", "內子座依開館時間選擇"],
        map: mapSearch("內子 八日市護國町並"),
        tags: ["老街", "建築", "攝影"],
        status: "confirmed"
      },
      {
        time: "15:40",
        title: "下灘站・伊予灘夕陽",
        eyebrow: "今日主景",
        summary: "在月台與海平線之間等待日落，這一站已確定保留。",
        detail: "下灘站以面海月台聞名。十一月日落早，必須留足從內子前往海岸的時間；抵達後不再追加其他景點。",
        highlights: ["提早抵達找停車位置", "月台需尊重乘客與列車運行", "陰天仍可拍海面與鐵道的柔光"],
        note: "日落時間與列車班次需在出發前再次確認。",
        map: mapSearch("下灘駅"),
        tags: ["夕陽", "海景", "攝影"],
        status: "confirmed"
      },
      {
        time: "18:30",
        title: "入住 REF 松山市站",
        eyebrow: "住宿",
        summary: "夕陽後前往松山市區，連住兩晚。",
        detail: "飯店位於松山市站附近，方便隔日以市區交通和步行遊覽松山，不需再長途開車。",
        highlights: ["住宿第一晚", "抵達後就近晚餐", "隔日市區慢遊"],
        map: mapSearch("REF 松山市站 by VESSEL"),
        tags: ["住宿", "松山"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/22",
    weekday: "日",
    place: "松山",
    title: "城下與湯煙，松山慢遊",
    lodging: "REF 松山市站 by VESSEL",
    lodgingMap: mapSearch("REF 松山市站 by VESSEL"),
    stops: [
      {
        time: "09:00",
        title: "松山城",
        eyebrow: "城郭",
        summary: "搭纜車上山，在現存天守、石垣與瀨戶內視野間散步。",
        detail: "松山城是本日核心。早上先上山可避開較晚人潮，也為下午道後溫泉保留完整時段。",
        highlights: ["現存十二天守之一", "停留約 2 小時", "纜車／吊椅依現場狀況選擇"],
        map: mapSearch("松山城 愛媛"),
        tags: ["城郭", "歷史", "攝影"],
        status: "confirmed"
      },
      {
        time: "12:00",
        title: "大街道・午餐",
        eyebrow: "市區散步",
        summary: "從城下走進商店街，用午餐銜接松山市中心與道後。",
        detail: "可選松山式鯛め炊飯，和宇和島的生鯛魚片版本做對照；若想吃其他料理，也保留彈性。",
        highlights: ["大街道商店街散步", "午餐不指定單一店家", "之後搭路面電車前往道後"],
        map: mapSearch("大街道商店街 松山"),
        tags: ["午餐", "商店街"],
        status: "flex"
      },
      {
        time: "14:00",
        title: "道後溫泉街",
        eyebrow: "午後慢遊",
        summary: "從道後溫泉站走過商店街、本館、飛鳥乃湯泉與道後公園。",
        detail: "道後下午不追趕多個室內參觀，以街區、建築與泡湯選擇為主。是否入浴依現場排隊與體力決定。",
        highlights: ["道後溫泉本館外觀", "飛鳥乃湯泉與工藝細節", "圓滿寺、道後公園順路散步"],
        map: mapSearch("道後溫泉本館"),
        tags: ["溫泉", "建築", "散步"],
        status: "confirmed"
      },
      {
        time: "16:30",
        title: "石手寺",
        eyebrow: "傍晚選配",
        summary: "若時間與體力足夠，在道後附近補一段古寺散步。",
        detail: "石手寺距離道後不遠，山門、石造物與古寺氛圍很適合秋季傍晚；若道後停留較久則直接略過。",
        highlights: ["四國八十八所第 51 番", "屬於彈性景點", "不為完成清單而趕行程"],
        map: mapSearch("石手寺"),
        tags: ["寺院", "文化"],
        status: "flex"
      },
      {
        time: "晚上",
        title: "松山・第二晚",
        eyebrow: "住宿",
        summary: "回到松山市站附近，結束城市慢遊日。",
        detail: "第二晚不搬行李。晚上可回大街道或松山市站周邊吃飯，也可以提早休息。",
        highlights: ["住宿第二晚", "避免再開長途車", "整理隔日西條入住"],
        map: mapSearch("REF 松山市站 by VESSEL"),
        tags: ["住宿", "休息"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/23",
    weekday: "一",
    place: "西條",
    title: "石鎚山麓，留一晚空白",
    lodging: "ITOMACHI Hotel 0",
    lodgingMap: mapSearch("ITOMACHI Hotel 0 西條"),
    stops: [
      {
        time: "09:30",
        title: "松山退房・前往西條",
        eyebrow: "緩衝日",
        summary: "離開松山後不排滿，把時間留給西條與設計旅宿。",
        detail: "松山到西條的純車程不長。這一天作為後半旅程的緩衝，不再繞回已看過的下灘。",
        highlights: ["車程約 1–1.5 小時", "依天氣決定山麓或市區", "16:00 左右入住為目標"],
        map: mapSearch("松山 到 西條"),
        tags: ["移動", "慢旅"],
        status: "confirmed"
      },
      {
        time: "11:30",
        title: "石鎚神社 本社",
        eyebrow: "山岳信仰",
        summary: "在石鎚山腳看鳥居、參道與晚秋山色。",
        detail: "這裡不是登山口，而是適合一般旅程停留的本社。若當天天候不佳，可改成西條市區與名水散步。",
        highlights: ["停留約 45–60 分鐘", "十一月底山色可能接近尾聲", "不安排石鎚山登山"],
        map: mapSearch("石鎚神社 本社"),
        tags: ["神社", "山景", "紅葉"],
        status: "flex"
      },
      {
        time: "14:00",
        title: "西條市區・名水散步",
        eyebrow: "午後彈性",
        summary: "沿著水之都的湧泉與小街散步，或短停鐵道歷史公園。",
        detail: "西條當日細節尚未完全定案。可在弘法水等名水點與鐵道歷史公園之間選擇，不追求全部完成。",
        highlights: ["名水點依動線選一處", "鐵道歷史公園為備選", "保留飯店入住時間"],
        map: mapSearch("西條鐵道歷史公園"),
        tags: ["名水", "散步"],
        status: "flex"
      },
      {
        time: "16:00",
        title: "入住 ITOMACHI Hotel 0",
        eyebrow: "住宿主角",
        summary: "提早入住，把建築、公共空間和慢下來的時間都算進行程。",
        detail: "ITOMACHI Hotel 0 不是單純過夜點，而是本日核心之一。傍晚留在飯店周邊，不再增加長距離活動。",
        highlights: ["設計旅宿與永續概念", "住宿已確認", "晚餐依飯店周邊與當日營業決定"],
        map: mapSearch("ITOMACHI Hotel 0 西條"),
        tags: ["住宿", "設計", "建築"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/24",
    weekday: "二",
    place: "高松",
    title: "回到讚岐，在庭園收光",
    lodging: "多美迎高松中央公園前",
    lodgingMap: mapSearch("多美迎高松中央公園前"),
    stops: [
      {
        time: "09:30",
        title: "西條退房・往香川",
        eyebrow: "瀨戶內回程",
        summary: "沿瀨戶內方向回到香川，進入旅程最後兩晚。",
        detail: "西條到高松約兩小時。途中不刻意加入別子銅山等大型繞路，把午後完整留給栗林公園。",
        highlights: ["早餐後從容出發", "進入香川後安排烏龍麵", "避免下午太晚抵達栗林公園"],
        map: mapSearch("西條 到 栗林公園"),
        tags: ["移動", "瀨戶內"],
        status: "confirmed"
      },
      {
        time: "12:00",
        title: "讚岐烏龍麵",
        eyebrow: "午餐",
        summary: "回到香川後先吃一碗烏龍麵，店家依實際動線與營業時間決定。",
        detail: "山越うどん與長田 in 香の香皆為候選，但烏龍麵店常提早售完，因此不把單一店家寫死。",
        highlights: ["出發前確認營業日", "售完即止很常見", "以不繞路為優先"],
        map: mapSearch("長田 in 香の香"),
        tags: ["午餐", "烏龍麵"],
        status: "flex"
      },
      {
        time: "14:30",
        title: "栗林公園",
        eyebrow: "秋色庭園",
        summary: "走過南湖、偃月橋與飛來峰，把午後斜光留給庭園。",
        detail: "栗林公園是回到高松後最重要的秋景。安排在沒有回程壓力的下午，能慢慢看池泉、松景與晚秋色彩。",
        highlights: ["飛來峰俯瞰南湖", "偃月橋與掬月亭一帶", "留意秋季夜間點燈資訊"],
        map: mapSearch("栗林公園"),
        tags: ["庭園", "紅葉", "攝影"],
        status: "confirmed"
      },
      {
        time: "18:00",
        title: "入住高松・中央商店街",
        eyebrow: "住宿",
        summary: "連住兩晚，晚上步行逛丸龜町一帶或吃骨付鳥。",
        detail: "飯店位於中央公園附近。第一晚可安排一鶴骨付鳥或商店街晚餐，之後不需再開車。",
        highlights: ["住宿第一晚", "骨付鳥一鶴為晚餐候選", "飯店周邊步行活動"],
        map: mapSearch("多美迎高松中央公園前"),
        tags: ["住宿", "晚餐", "商店街"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/25",
    weekday: "三",
    place: "高松",
    title: "屋島望海，旅程將晚",
    lodging: "多美迎高松中央公園前",
    lodgingMap: mapSearch("多美迎高松中央公園前"),
    stops: [
      {
        time: "09:00",
        title: "屋島寺・獅子之靈巖",
        eyebrow: "瀨戶內展望",
        summary: "在源平故事與瀨戶內海景間，度過高松最後一個完整上午。",
        detail: "屋島結合寺院、歷史與海景，適合這趟旅行收尾。能見度好時可望向高松港與小豆島方向。",
        highlights: ["屋島寺與展望台一併安排", "停留約 2–3 小時", "海風較強，準備保暖外套"],
        map: mapSearch("屋島寺 獅子の霊巌"),
        tags: ["寺院", "海景", "歷史"],
        status: "confirmed"
      },
      {
        time: "12:00",
        title: "わら家・釜揚烏龍麵",
        eyebrow: "午餐",
        summary: "在古民家空間吃釜揚烏龍麵，銜接屋島午後行程。",
        detail: "わら家位於屋島附近，空間氣氛與行程調性相符。若排隊過長或休業，再改用鄰近備選。",
        highlights: ["以釜揚烏龍麵為主", "熱門時段可能排隊", "先確認當日營業"],
        map: mapSearch("わら家 高松"),
        tags: ["午餐", "烏龍麵", "古民家"],
        status: "flex"
      },
      {
        time: "14:00",
        title: "八栗寺・牟禮町",
        eyebrow: "午後方案 A",
        summary: "延續屋島山海線，到五劍山下的八栗寺與安靜街區。",
        detail: "目前以八栗寺作為第一順位，但尚未完全定案。若當天想降低移動量，可以改走高松港、玉藻公園與北濱。",
        highlights: ["八栗寺需留意纜車時間", "方案 B：玉藻公園＋高松港", "兩套方案擇一，不同時硬塞"],
        note: "此卡會保留彈性，確定後可直接替換內容。",
        map: mapSearch("八栗寺"),
        tags: ["寺院", "紅葉", "彈性"],
        status: "flex"
      },
      {
        time: "17:00",
        title: "高松港・旅程夕景",
        eyebrow: "視時間選配",
        summary: "若採城市方案，就在港邊看最後一段瀨戶內暮色。",
        detail: "高松港與玉藻公園適合不想再跑郊區時使用；若八栗寺停留完整，這張卡可以略過。",
        highlights: ["玉藻公園注意閉園時間", "北濱 Alley 可順路散步", "依夕陽、天氣與體力決定"],
        map: mapSearch("高松港 玉藻公園"),
        tags: ["港口", "夕景"],
        status: "flex"
      },
      {
        time: "晚上",
        title: "高松・第二晚",
        eyebrow: "住宿",
        summary: "回到同一間飯店，整理行李與隔日還車安排。",
        detail: "最後一晚不再安排必去餐廳。確認租車還車地點、油量、機場出發時間與行李後，留一個自在的晚上。",
        highlights: ["住宿第二晚", "確認還車前加油地點", "整理護照、退稅品與行李"],
        map: mapSearch("多美迎高松中央公園前"),
        tags: ["住宿", "行前整理"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "11/26",
    weekday: "四",
    place: "高松・返程",
    title: "最後一碗麵，向四國道別",
    lodging: "今日返台・無住宿",
    lodgingMap: mapSearch("高松機場"),
    stops: [
      {
        time: "上午",
        title: "高松最後散步",
        eyebrow: "依航班安排",
        summary: "若班機時間允許，在中央公園、商店街或港邊作最後短停。",
        detail: "回程日不設定必完成景點。所有上午活動都必須以還車與航班報到時間為優先。",
        highlights: ["可選玉藻公園或高松港", "已在前日完成則不重複", "不安排遠離市區的景點"],
        map: mapSearch("高松港"),
        tags: ["散步", "彈性"],
        status: "flex"
      },
      {
        time: "午前",
        title: "最後一碗讚岐烏龍麵",
        eyebrow: "旅程收尾",
        summary: "依營業時間與路線選竹清、さか枝或機場方向店家。",
        detail: "烏龍麵店營業時間普遍偏早，回程日可把它當作早午餐。若航班較早，就直接取消。",
        highlights: ["竹清、さか枝為候選", "先確認營業與排隊", "不因用餐壓縮機場時間"],
        map: mapSearch("竹清うどん 高松"),
        tags: ["烏龍麵", "午餐"],
        status: "flex"
      },
      {
        time: "依航班",
        title: "加油・還車・高松機場",
        eyebrow: "返程",
        summary: "完成加油與還車，預留接駁及報到時間，返回台灣。",
        detail: "航班時間尚未寫入，因此目前不設定固定出發時刻。確認機票後，這張卡會成為回程日的主要時間基準。",
        highlights: ["依租車規定加滿油", "預留還車檢查與機場接駁", "國際線提早抵達報到"],
        note: "待補：航班編號、起飛時間、租車公司與還車據點。",
        map: mapSearch("高松機場"),
        tags: ["還車", "機場", "返台"],
        status: "confirmed"
      }
    ]
  }
];

// -----------------------------------------------------------------------------
// 畫面互動。以下程式負責日期切換、卡片詳細說明、地圖連結與底部導覽。
// -----------------------------------------------------------------------------

let activeDayIndex = 0;
let lastFocusedElement = null;

const dateRail = document.querySelector("#date-rail");
const dayView = document.querySelector("#day-view");
const scheduleSection = document.querySelector("#schedule-section");
const infoSection = document.querySelector("#info-section");
const scheduleNav = document.querySelector("#schedule-nav");
const infoNav = document.querySelector("#info-nav");
const hotelList = document.querySelector("#hotel-list");
const modalBackdrop = document.querySelector("#modal-backdrop");
const closeModalButton = document.querySelector("#close-modal");
const modalDoneButton = document.querySelector("#modal-done");

function mapLink(url, compact = false) {
  const compactClass = compact ? " compact" : "";
  const text = compact ? "" : "地圖";
  return `<a class="map-link${compactClass}" href="${url}" target="_blank" rel="noreferrer" aria-label="在 Google 地圖開啟"><span aria-hidden="true">⌖</span>${text}</a>`;
}

function renderDateRail() {
  dateRail.innerHTML = days.map((day, index) => `
    <button class="date-button ${index === activeDayIndex ? "active" : ""}" type="button" data-day-index="${index}" ${index === activeDayIndex ? 'aria-current="date"' : ""}>
      <span>${day.weekday}</span>
      <strong>${day.date}</strong>
      <small>${day.place}</small>
    </button>
  `).join("");

  const activeButton = dateRail.querySelector(".date-button.active");
  activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function renderDay() {
  const day = days[activeDayIndex];
  const timeline = day.stops.map((stop, stopIndex) => {
    const isFlex = stop.status === "flex";
    return `
  <article class="stop ${isFlex ? "is-flex" : ""}">
    <div class="stop-card" role="button" tabindex="0" data-stop-index="${stopIndex}" aria-label="查看 ${stop.title} 詳細說明">
      <div class="card-topline">
  <div class="time">
  <span>${stop.time}</span>
  ${stop.eyebrow ? `<span class="eyebrow">${stop.eyebrow}</span>` : ""}
</div>

  <span class="status ${isFlex ? "flex" : "confirmed"}">${isFlex ? "彈性" : "已確認"}</span>
</div>
          <div class="title-row">
            <h2>${stop.title}</h2>
            ${mapLink(stop.map, true)}
          </div>
          <p>${stop.summary}</p>
        </div>
        ${stopIndex < day.stops.length - 1 ? '<span class="timeline-thread" aria-hidden="true"></span>' : ""}
      </article>
    `;
  }).join("");

  dayView.innerHTML = `
    <header class="day-heading">
  <h1>${day.title}</h1>
  <span class="brush" aria-hidden="true"></span>
</header>
    <div class="legend" aria-label="狀態說明">
      <span><i class="dot confirmed"></i>已確認</span>
      <span><i class="dot flex"></i>彈性安排</span>
    </div>
    <div class="timeline">${timeline}</div>
    <section class="lodging-card">
      <div>
        <p>今夜の宿</p>
        <h2>${day.lodging}</h2>
        ${day.lodgingNote ? `<small>${day.lodgingNote}</small>` : ""}
      </div>
      ${mapLink(day.lodgingMap)}
    </section>
    <div class="day-controls">
      <button id="previous-day" type="button" ${activeDayIndex === 0 ? "disabled" : ""}>← 前一天</button>
      <button id="next-day" type="button" ${activeDayIndex === days.length - 1 ? "disabled" : ""}>後一天 →</button>
    </div>
  `;
}

function openStop(stopIndex, triggerElement) {
  const stop = days[activeDayIndex].stops[stopIndex];
  lastFocusedElement = triggerElement;

  document.querySelector("#detail-eyebrow").textContent =
stop.eyebrow ? `${stop.time} · ${stop.eyebrow}` : stop.time;
  document.querySelector("#detail-title").textContent = stop.title;
  document.querySelector("#detail-text").textContent = stop.detail;
  document.querySelector("#detail-map").href = stop.map;
  document.querySelector("#detail-tags").innerHTML = stop.tags.map(tag => `<span>${tag}</span>`).join("");
  document.querySelector("#detail-highlights").innerHTML = stop.highlights.map(item => `<li>${item}</li>`).join("");
  const restaurantBlock = document.querySelector("#detail-restaurants");
const restaurantList = document.querySelector("#restaurant-list");

if (stop.restaurants) {
  restaurantBlock.hidden = false;
  restaurantList.innerHTML = stop.restaurants.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
      <p>${item.note || ""}</p>
      <a href="${item.map}" target="_blank">Google Map</a>
    </article>
  `).join("");
} else {
  restaurantBlock.hidden = true;
}
const nearbyBlock = document.querySelector("#detail-nearby");
const nearbyList = document.querySelector("#nearby-list");

if (stop.nearby) {
  nearbyBlock.hidden = false;
  nearbyList.innerHTML = stop.nearby.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
<p>${item.note || ""}</p>
      ${
  item.maps
    ? item.maps.map((url, index) =>
        `<a href="${url}" target="_blank">Google Map ${index + 1}</a>`
      ).join(" ")
    : `<a href="${item.map}" target="_blank">Google Map</a>`
}
    </article>
  `).join("");
} else {
  nearbyBlock.hidden = true;
  nearbyList.innerHTML = "";
}
  const note = document.querySelector("#detail-note");
  note.hidden = !stop.note;
  note.querySelector("p").textContent = stop.note || "";

  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

function changeDay(index) {
  if (index < 0 || index >= days.length) return;
  activeDayIndex = index;
  renderDateRail();
  renderDay();
  window.scrollTo({ top: document.querySelector(".date-dock").offsetTop, behavior: "smooth" });
}

function renderHotelList() {
  const hotels = [];

  days.slice(0, 11).forEach(day => {
    const previousHotel = hotels.at(-1);
    if (previousHotel && previousHotel.name === day.lodging) {
      previousHotel.endDate = day.date;
    } else {
      hotels.push({
        startDate: day.date,
        endDate: day.date,
        name: day.lodging,
        map: day.lodgingMap,
        note: day.lodgingNote || ""
      });
    }
  });

  hotelList.innerHTML = hotels.map(hotel => {
    const dates = hotel.startDate === hotel.endDate ? hotel.startDate : `${hotel.startDate}–${hotel.endDate}`;
    return `
      <article>
        <div>
          <time>${dates}</time>
          <h3>${hotel.name}</h3>
          ${hotel.note ? `<p>${hotel.note}</p>` : ""}
        </div>
        ${mapLink(hotel.map, true)}
      </article>
    `;
  }).join("");
}

function showSection(sectionName) {
  const showSchedule = sectionName === "schedule";
  scheduleSection.hidden = !showSchedule;
  infoSection.hidden = showSchedule;
  scheduleNav.classList.toggle("active", showSchedule);
  infoNav.classList.toggle("active", !showSchedule);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

dateRail.addEventListener("click", event => {
  const button = event.target.closest("[data-day-index]");
  if (!button) return;
  changeDay(Number(button.dataset.dayIndex));
});

dayView.addEventListener("click", event => {
  const mapAnchor = event.target.closest("a.map-link");
  if (mapAnchor) return;

  const card = event.target.closest("[data-stop-index]");
  if (card) openStop(Number(card.dataset.stopIndex), card);

  if (event.target.closest("#previous-day")) changeDay(activeDayIndex - 1);
  if (event.target.closest("#next-day")) changeDay(activeDayIndex + 1);
});

dayView.addEventListener("keydown", event => {
  const card = event.target.closest("[data-stop-index]");
  if (!card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openStop(Number(card.dataset.stopIndex), card);
});

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

closeModalButton.addEventListener("click", closeModal);
modalDoneButton.addEventListener("click", closeModal);
scheduleNav.addEventListener("click", () => showSection("schedule"));
infoNav.addEventListener("click", () => showSection("info"));

renderDateRail();
renderDay();
renderHotelList();
