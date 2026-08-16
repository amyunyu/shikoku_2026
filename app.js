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
    lodgingMap: "https://maps.app.goo.gl/PHmXVKhk1QtiRbky5?g_st=ic",
    lodgingNote: "Booking。隔日早餐已包含",
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
        map: "https://maps.app.goo.gl/PHmXVKhk1QtiRbky5?g_st=ic",
        status: "confirmed"
      },
      {
        time: "15:30",
        title: "新町商店街（歌舞伎新町）、表參道",
        eyebrow: "午後散步",
        nearby: [
          {
            name: "➀ 平岡精肉店",
            note: "2025百名店，(金毘羅街道上的老店，逛參道時可順路買來邊走邊吃。",
            map: "https://maps.app.goo.gl/LLLEddk6UcHYwxGQ8?g_st=ic"
          },
          {
            name: "➁ Kotohira Stationery Store 琴平文具店",
            note: "金毘羅街道上，獨家的香川縣紙膠帶。",
            map: "https://maps.app.goo.gl/UqpwoNqC9dksDMgW9?g_st=ic"
          },
          {
            name: "➂ 旧金毘羅大芝居(金丸座)",
            note: "金刀比羅表參道旁，建於1835年現存日本最古老的歌舞伎劇場，門票500。\n明天還可以去。",
            map: "https://maps.app.goo.gl/BDGj3FvLf1gmqwP6A?g_st=ic"
          }
        ],
        summary: "沿石階與木造店舖慢慢走，第一天不以攻頂為目標。",
        detail: "表參道是琴平最適合用來展開旅程的地方。下午斜光會在石階、屋簷和老店招牌之間形成漂亮層次；依抵達時間決定走到大門或御本宮。",
        highlights: ["JR琴平駅可以拍照","表參道散步約 45–60 分鐘"],
        map: "https://maps.app.goo.gl/9oroq6LE3emokJ1ZA?g_st=ic",
        tags: ["逛街", "攝影"],
        status: "flex"
      },
      {
        time: "晚餐",
        title: "琴平晚餐",
        restaurants: [
          {
            name: "➀ Musashi 手打うどん むさし",
            map: "https://maps.app.goo.gl/9fUeT7x5AmDs9t5d6",
            note: "2024百名店。"
          },
          {
            name: "➁ Iwanoya セルフうどん いわのや",
            map: "https://maps.app.goo.gl/Ca7A5piFs7WieaLV6?g_st=ic",
            note: "烏龍麵，10:00-15:00。"
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
    place: "金刀比羅・脇町",
    title: "白壁商街，秋光緩行",
    lodging: "PAYSAGE MORIGUCHI",
    lodgingMap: "https://maps.app.goo.gl/HggrojLCHYgYS3dB6",
    lodgingNote: "Booking。隔日早餐已包含",
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
    name: "➀ Nazuna-dō 七十七堂",
    note: "位於參道77段附近，適合作為登拜前後的短暫休息點。",
    map: "https://maps.app.goo.gl/JWWMWAWdgtRVu2gy8"
    },
    {
      name: "➁ 五人百姓",
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
  map: "https://maps.app.goo.gl/LFrDStCXj4DPwWgr8",
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
      name: "➀ 道の駅 空の夢もみの木パーク",
      note: "適合作為琴平往脇町方向的補給停留。有人孔蓋卡。\n小型在地農產＋まんのう特色商品，例如向日葵籽冰淇淋。\nひまわり牛肉うどん 向日葵牛肉烏龍麵。",
      map: "https://maps.app.goo.gl/SrxaYX6Xcwn4dsLp6?g_st=ic"
    },
    {
      name: "➁ 道の駅 たからだの里さいた",
      note: "週一休館...規模比較大。主打財田當地的朝採蔬果、加工品、惣菜，而且現在還有麵包工房，官方說有40種以上現烤麵包。\n手作りアイスクリーム。三豐市觀光官方資料寫到，他們使用當地旬水果製作的冰淇淋，曾獲得四國地區道之駅冰淇淋選手權 Grand Prix。",
      map: "https://maps.app.goo.gl/3CXZFvdYjhzfpxf98?g_st=ic"
    },
    {
      name: "➂ 吉野川サービスエリア（下り）",
      note: "好像沒什麼值得停留的，有超商、可以上廁所。",
      map: "https://maps.app.goo.gl/PkEMKpdLuXSdVB359?g_st=ic"
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
        detail: "吉野川沿岸的重要交通和商業據點，從脇城城下町發展而來，並因藍染產業的繁榮而累積財富。如今仍保存85棟江戶中期至昭和初期的傳統建造物，白壁町家與瓦頂うだつ交織成完整的歷史街景。\n\n漫步其中，可以看見商人町家的繁盛痕跡：兩側屋簷高低錯落，白漆喰牆面映著秋日斜陽，防火與象徵財力的「うだつ」成為這條街最鮮明的記憶。",
        nearby: [
    {
    name: "脇町劇場 オデオン座",
    note: "建於1934年的昭和初期劇場，外觀帶有西洋摩登風格，內部保留旋轉舞台與奈落等傳統劇場構造。曾經歷歌舞伎、浪曲、電影放映的繁盛年代，也因山田洋次電影《虹をつかむ男》而重新受到保存。如今修復後成為脇町老街中，連結昭和記憶與地方文化的重要場所。",
    map: "https://maps.app.goo.gl/xWsBRb42iNp7dLD87"
    }
  ],
        highlights: ["商人町家與白壁街景", "下午三點後屋簷光影佳", "咖啡店與藍染店可視營業彈性停留"],
        map: "https://maps.app.goo.gl/1t7LbubPy6esDR9G8?g_st=ic",
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
            name: "➀ Punta",
            map: "https://maps.app.goo.gl/Gfc3h7GuRP2mW5pM8",
            note: "義大利麵，住宿附近。"
          },
          {
            name: "➁ 元 手打ちうどん元",
            map: "https://maps.app.goo.gl/WCbEd6tXihfdER2V6",
            note: "烏龍麵，距離住宿走路15分鐘。"
          },
          {
            name: "➂ Maharaja Spice マハラジャスパイス",
            map: "https://maps.app.goo.gl/kJHPCtmJjFy9YqRd8",
            note: "印度咖哩，要開車前往。"
          },
          {
            name: "➃ 麺屋・國丸 脇町店",
            map: "https://maps.app.goo.gl/X3WLndDHTYAHNuBr6",
            note: "拉麵，要開車前往。"
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
    place: "祖谷・大步危",
    title: "穿過山河，抵達土佐",
    lodging: "OMO7 高知 by 星野集團",
    lodgingMap: "https://maps.app.goo.gl/saWfbKz5Zh3PhBF17",
    lodgingNote: "Booking。含早餐",
    stops: [
      {
        time: "08:30",
        title: "脇町出發・祖谷方向",
        eyebrow: "山路移動",
        summary: "在住宿用早餐後離開，逐漸進入四國山地與吉野川峽谷。",
        detail: "這一天是全程山區核心日。\n從脇町到奧祖谷二重蔓橋山路約1h40m，路上好像沒有休息站喔",
        highlights: ["出發前加滿油並確認天氣", "山區留意會車與落葉", "傍晚前離開祖谷深處"],
        map: "https://maps.app.goo.gl/kRpRUisLBX8yiLbk9?g_st=ic",
        tags: ["山路", "移動"],
        status: "confirmed"
      },
      {
time: "10:00",
title: "奧祖谷二重蔓橋",
eyebrow: "秘境山村",
summary: "深入祖谷最深處，在原始山林中尋找兩座古老藤蔓橋。",
detail: "奧祖谷二重蔓橋位於祖谷山地深處，由男橋與女橋兩座藤蔓橋組成。相較於西祖谷的祖谷蔓橋，這裡位置更偏遠、人潮更少，也更能感受到四國山村與自然共存的氣息。",
nearby: [
          {
            name: "奥祖谷二重かずら橋入口（料金所）",
            note: "旁邊就可以停車。",
            map: "https://maps.app.goo.gl/KCsV4UqqjgcDpNJe8"
          }
        ],        
highlights: [
"門票每人550",
  "男橋、女橋兩座藤蔓橋",
"十一月底注意落葉與濕滑路面",
"建議停留約45–60分鐘"
],
map: "https://maps.app.goo.gl/KCsV4UqqjgcDpNJe8",
tags:["秘境","山村","攝影"],
status:"confirmed"
      },
      {
        time: "12:00",
        title: "祖谷蔓橋。午餐",
        eyebrow: "祖谷",
        summary: "走過藤蔓橋與溪谷。",
        detail: "被列為日本三奇橋之一的祖谷葛藤橋，其起源有多種傳說，一說是這座橋是平家落人為了在後有追兵時能迅速切斷葛藤而特意建造的防禦設施；另一說則是巡行四國的弘法大師，為了幫助難以渡河的村民而親手建造的。\n\n被陡峭的四國山地環抱的祖谷地區，相傳是由在「屋島之戰」中戰敗的平國盛以及安德天皇一行人逃亡至此，為了祈求平家復興再起而定居下來的隱居村落，由於直到近代以前，這裡幾乎是與世隔絕的狀態，因此自中世以來的生活方式與獨特的風土民情得以幾乎完整的保留下來。",
        nearby: [
    {
      name: "藤蔓橋夢舞台 駐車場",
      map: "https://maps.app.goo.gl/jms7Z3rzrN4giAVi8"
    },
          {
      name: "琵琶瀑布",
      note: "從祖谷蔓橋步行50公尺即可達、有50公尺高的瀑布。\n傳說從前在源平大戰中戰敗的平氏家族殘兵逃到此地，懷想起京都，在這個瀑布旁彈奏琵琶以聊慰寂寥之心，琵琶瀑布因此得名。\n*再往前走50公尺左右有遊山步道，可以沿著石階往下走到河邊。",
      map: "https://maps.app.goo.gl/gVrveo7V5gNrWgwn7"
    }
        ],
        restaurants: [
          {
            name: "➀ 森のくまさん",
            map: "https://maps.app.goo.gl/DjSHSeeNg1nvQw5e9",
            note: "在祖谷蔓橋駐車場附近，咖啡輕食"
          },
          {
            name: "➁ おのみ家（おのみや）",
            map: "https://maps.app.goo.gl/PmGhBWEzyEn45oPe9",
            note: "定食，前往大步危途中。這個看起來比較理想"
          },
          {
            name: "➂ Cafe & Jibie",
            map: "https://maps.app.goo.gl/ggzqrks6WKzovaKUA",
            note: "在道の駅 大歩危"
          }
        ],
        highlights: ["門票每人550", "停留約 45–60 分鐘"],
        map: "https://maps.app.goo.gl/yX5eu6ZMHA4EN6yB6",
        tags: ["溪谷", "文化", "攝影"],
        status: "confirmed"
      },
      {
  time: "14:30",
  title: "大步危峽谷觀光遊覽船",
  eyebrow: "溪谷主景",
  summary: "搭乘30分鐘遊船，從吉野川水面近距離欣賞大步危峽谷的岩壁與清流。",
  detail: "大步危小步危為國指定名勝，其中上游約4公里的大步危峽谷，以2億年時間形成的岩石景觀聞名。搭乘觀光船沿吉野川巡航，是感受峽谷尺度最直接的方式。\n\n船程約30分鐘，沿途可近距離欣賞被稱為自然雕刻的岩壁景觀，讓山河景色成為這一天的重要記憶。",
  nearby: [
          {
            name: "➀ RiverStation West West",
            note: "位於大歩危・祖谷入口處的綜合観光設施。",
            map: "https://maps.app.goo.gl/Z1SaJHptXdEsyihC8"
          },
    {
            name: "➁ 道の駅 大歩危",
            map: "https://maps.app.goo.gl/ELtr69po9g9LcUoi6"
          },
          {
            name: "➂ Cafe & ジビエ",
            map: "https://maps.app.goo.gl/ELtr69po9g9LcUoi6"
          }
        ],
        highlights: [
    "遊船約30分鐘",
    "成人票價約1800日圓",
    "雨天或河川狀況依現場判斷"
  ],
  map: "https://maps.app.goo.gl/b4xZ9zRweS5w8xpi9",
  tags: ["溪谷", "紅葉", "遊船", "攝影"],
        status: "confirmed"
},
      {
        time: "17:00",
        title: "抵達 OMO7 高知",
        eyebrow: "住宿",
        summary: "離開祖谷後直達高知，連住兩晚、不再搬行李。",
        detail: "抵達後以入住與晚餐為主。高知連住兩晚能讓隔日城市文化行程更從容。",
        restaurants: [
          {
            name: "➀ Nikomichan にこみちゃん",
            map: "https://maps.app.goo.gl/e8MK53owo18UBKL5A",
            note: "燉煮類燒烤刺身，走路4分鐘。"
          },
          {
            name: "➁ Imadoki Yasubei いまどき安兵衛",
            map: "https://maps.app.goo.gl/4fiRk6EWTE6RRsmD6",
            note: "2024百名店，煎餃關東煮拉麵，走路14分鐘。"
          },
          {
            name: "➂ Kamontei かもん亭",
            map: "https://maps.app.goo.gl/7sVzcT59tz6sdzjy6",
            note: "2025百名店，居酒屋，走路14分鐘。"
          },
          {
            name: "➃ Cock Doll (コックドール)",
            map: "https://maps.app.goo.gl/NmQ8HZuVoKVnwK6h6",
            note: "2025百名店，蛋包飯漢堡排，走路18分鐘。"
          },
          {
            name: "➄ Donko 酒亭どんこ",
            map: "https://maps.app.goo.gl/Hevt8jZRw1dPcy6y9",
            note: "2025百名店，居酒屋，走路14分鐘。饕客推薦蕎麥麵搭配炸雞。"
          }
        ],
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
    lodgingNote: "Booking。含早餐",
    stops: [
      {
        time: "09:00",
        title: "高知城",
        eyebrow: "城下町",
        summary: "從追手門走向現存天守，看石垣、木造建築與秋日銀杏。",
        detail: "現存的高知城是日本全國唯一保留整個本丸建築群的古城。天守閣為現存十二座天守之一，而能將追手門與天守拍在同一張照片中的，僅有高知城而已，因此也成為相當受歡迎的攝影景點。",
        highlights: ["停留約 1–1.5 小時", "追手門前適合拍建築同框", "城內階梯較陡"],
        map: "https://maps.app.goo.gl/5P36ZLBQpEi4uVGD6",
        tags: ["城郭", "歷史", "攝影"],
        status: "confirmed"
      },
      {
        time: "11:00",
        title: "帯屋町・弘人市場",
        eyebrow: "街區與午餐",
        summary: "沿商店街走到市場，用藁燒鰹魚和土佐小菜認識高知日常。",
        detail: "「弘人市場」是高知旅遊必訪美食聚集地，集結約60間攤商，在地美食美酒諸如高知靈魂美食「鰹魚半敲燒」（鰹のたたき）、夢幻「土佐褐毛牛」牛排、「高知18酒造」等各式日本酒，以及異國料理應有盡有，被稱為「高知的廚房」。\n* 座位採併桌方式，很有機會與在地人、各地旅客共桌。",
        nearby: [
  {
  name: "ひろめ市場・攤位位置圖",
  note: "市場內攤位配置參考。",
  image: "assets/hirome-map.png"
  },
          {
            name: "➀ 明神丸 ひろめ市場店",
            note: "編號14的位置，稻草炙燒鰹魚/鰹魚半敲燒（鰹のたたき）。\n高知縣是日本最愛吃鰹魚的地方。"
          },
          {
            name: "➀-1 Myojinmaru Hanare 明神丸はなれ",
            note: "市場外的分店，也許比較舒服。稻草炙燒鰹魚/鰹魚半敲燒（鰹のたたき）。"
          },
          {
            name: "➁ ひろめの奥 鰻祭",
            note: "編號34的位置，主打高知縣田野町出產的西岡鰻魚。"
          },
          {
            name: "➂ Petits Verres プティ・ヴェール",
            note: "編號59的位置，土佐褐毛牛。"
          }
        ],
        highlights: ["鰹魚料理是首選", "市場採共享座位", "午餐後可補逛地方雜貨"],
        map: "https://maps.app.goo.gl/yRe3afMtZNktomaT9",
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
        status: "flex"
      },
      {
        time: "16:15",
        title: "竹林寺",
        eyebrow: "五台山",
        summary: "在五重塔、苔庭與古寺空間中收束下午。",
        detail: "竹林寺就在牧野植物園附近，適合合併安排。是否再前往五台山展望點，依當天時間和能見度決定。",
        highlights: ["四國八十八所第 31 番", "苔庭與五重塔值得慢看", "桂濱不列為必要行程"],
        map: "https://maps.app.goo.gl/z8SLV4HkWyRu9jRp7?g_st=ic",
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
      },
      {
  time: "19:30",
  title: "土佐望月温泉 姫若子の湯",
  eyebrow: "日歸溫泉・晚間彈性",
  summary: "如果白天走得比較累，就用天然溫泉與露天風呂替高知的一天收尾。",
  detail: "高知市內的大型日歸溫泉設施。走完高知城、牧野植物園與竹林寺後，如果當天體力與時間都合適，可以在晚餐前後前往泡湯，讓連續幾天的步行與自駕稍微放鬆。\n館內除了天然溫泉露天風呂，也有高濃度人工炭酸泉、壺湯、寢湯與三溫暖等設施；另有需額外付費的岩盤浴。這一站完全不必勉強完成，如果當晚更想留在高知市區吃飯、散步，直接取消即可。",
  highlights: [
    "高知市內日歸溫泉",
    "天然溫泉露天風呂",
    "高濃度人工炭酸泉",
    "三溫暖",
    "可作為晚餐後的放鬆行程",
    "當天疲累或時間不足可直接取消"
  ],
  note: "屬晚間彈性行程。營業時間、入浴費與岩盤浴方案出發前再次確認。",
  map: "https://maps.app.goo.gl/iNtKg257S8rwzdJw5?g_st=ic",
  tags: ["溫泉", "日歸溫泉", "放鬆", "晚間"],
  status: "flex"
}
    ]
  },
  {
  date: "11/19",
  weekday: "四",
  place: "安藝・室戶",
  title: "穿過蕨谷，走向太平洋",
  lodging: "室戸岬の宿 うまめの木",
  lodgingMap: "https://maps.app.goo.gl/aodQrkqn7N3u82JUA",
  lodgingNote: "已寄信詢問｜2人・一泊二食・海側房・料理升級方案",
  stops: [
    {
      time: "08:30",
      title: "OMO7 高知退房・往安藝",
      eyebrow: "東海岸啟程",
      summary: "離開高知城下町，沿土佐灣一路向東，正式進入高知東海岸。",
      detail: "早餐後從 OMO7 高知退房，沿國道 55 號往安藝方向前進。今天開始從城市景觀轉入高知東部的海岸、山林與小城鎮。\n\n這一天不追求大量景點，而是把時間留給伊尾木洞、安藝舊街區與室戶岬，傍晚直接住在室戶岬附近。",
      highlights: [
        "高知 → 安藝約 1 小時",
        "出發前確認油量與天氣",
        "傍晚前抵達室戶岬"
      ],
      map: mapSearch("OMO7 高知"),
      tags: ["移動", "海岸線"],
      status: "confirmed"
    },

    {
      time: "09:40",
      title: "伊尾木洞",
      eyebrow: "蕨類溪谷",
      summary: "穿過低矮岩洞，走進被蕨類與溪流包圍的綠色谷地。",
      detail: "伊尾木洞入口看似只是一道低矮岩穴，穿過之後卻會突然進入完全不同的濕潤世界。溪流、岩壁與大量蕨類植物形成近乎原始森林般的景觀。\n這次以輕鬆散步為主，不深入長距離健行。洞內與溪谷地面容易潮濕，十一月也可能有落葉覆蓋石面，行走時注意腳下。",
      highlights: [
        "建議停留約 40–50 分鐘",
        "洞內與溪谷地面濕滑",
        "穿防滑、好走的鞋",
        "雨後視現場狀況縮短步行範圍"
      ],
      map: "https://maps.app.goo.gl/QPfWfXsxmgpHXU8f7",
      tags: ["自然", "溪谷", "蕨類", "攝影"],
      status: "confirmed"
    },
    {
      time: "10:45",
      title: "土居廓中・野良時計",
      eyebrow: "安藝武家町",
      summary: "走在土牆、武家屋敷與田園之間，尋找安藝城下町留下的時間。",
      detail: "土居廓中保存了安藝城下武家町的道路格局與傳統住宅。白牆、土塀、瓦屋與安靜小路，比大型觀光老街更像仍有人生活其中的歷史街區。\n附近的野良時計建於明治時代，是安藝代表性的地方景觀之一。它位於私人住宅範圍，以外觀欣賞與拍照為主，不進入私人土地。",
      nearby: [
        {
          name: "➀ 野良時計",
          note: "明治時代留下的手工時計台，是安藝最具代表性的地方風景之一。位於私人住宅旁，以外觀欣賞為主。",
          map: "https://maps.app.goo.gl/6bzrgTbLJN7YZ2k76"
        },
        {
          name: "➁ 土居廓中 武家屋敷",
          note: "保留安藝城下武家町格局的歷史街區，適合慢慢步行觀看土牆、瓦屋與町家細節。",
          map: "https://maps.app.goo.gl/cQoiDc4o1CiDdLsg6"
        },
        {
          name: "➂ 土居廓中 武家屋敷",
          note: "保留安藝城下武家町格局的歷史街區，適合慢慢步行觀看土牆、瓦屋與町家細節。",
          map: "https://maps.app.goo.gl/ownoMauuCFpUtMmW7"
        }
      ],
      highlights: [
        "土居廓中與野良時計一起散步",
        "建議停留約 1 小時",
        "尊重私人住宅範圍",
        "適合拍土牆、屋瓦與田園景觀"
      ],
      map: "https://maps.app.goo.gl/cQoiDc4o1CiDdLsg6",
      tags: ["老街", "歷史", "建築", "攝影"],
      status: "confirmed"
    },
    {
      time: "12:15",
      title: "安藝・午餐",
      eyebrow: "地方午餐",
      summary: "在安藝稍作休息，吃過午餐後再沿國道 55 號前往室戶。",
      detail: "上午完成伊尾木洞與安藝舊街區後，在安藝市區安排午餐。店家目前先不寫死，之後依營業日、停車與想吃的料理再補入。\n\n午餐後便離開安藝，接下來的景色會逐漸從田園與小鎮轉為太平洋海岸。",
      restaurants: [
          {
            name: "➀ Maeda-ya まえだ食堂",
            map: "https://maps.app.goo.gl/vmNuxbL1mreVtuF29?g_st=ic",
            note: "安藝在地排隊名店==。"
          },
          {
            name: "➁ chez nous スープカレーの店 シェ・ヌー",
            map: "https://maps.app.goo.gl/aQZr6HGZDHVDf7wr8?g_st=ic",
            note: "離開安藝的一家咖喱"
          },
          {
            name: "➂ Ichionto 海辺の料理店 一音灯",
            map: "https://maps.app.goo.gl/Zi5gNTLQu11UsFij6?g_st=ic",
            note: "海鮮、天婦羅蓋飯"
          }
        ],
      highlights: [
        "午餐預留約 1 小時",
        "餐廳之後再補",
        "午後沿國道 55 號往室戶",
        "不再繞進北川村莫內庭園"
      ],
      map: mapSearch("安芸駅 高知"),
      tags: ["午餐", "休息"],
      status: "flex"
    },
    {
  time: "14:30",
  title: "御厨人窟・神明窟",
  eyebrow: "空海修行之地",
  summary: "先從室戶岬東側進入，沿著海岸一路往南，從空海修行傳說展開室戶午後。",
  detail: "御厨人窟與神明窟位於室戶岬東側，相傳年輕時的空海曾在此修行。從岩窟向外望去，只見天空與海，也因此流傳著與「空海」之名相關的故事。\n\n把這裡安排在室戶午後的第一站，可以避免之後再往東側折返。停留不需要太久，重點是感受海岸岩窟、浪聲與室戶獨特的宗教氣氛。",
  highlights: [
    "停留約 20–30 分鐘",
    "與空海修行傳說相關",
    "注意潮濕、落石與現場開放狀況",
    "之後沿海岸往亂礁遊步道方向移動"
  ],
  map: mapSearch("御厨人窟"),
  tags: ["歷史", "空海", "洞窟", "海岸"],
  status: "confirmed"
},
{
  time: "15:00",
  title: "亂礁遊步道・室戶岬海岸",
  eyebrow: "今日主景",
  summary: "沿著岩礁與海浪向南走，把室戶最原始的太平洋景色留給午後。",
  detail: "亂礁遊步道沿室戶岬海岸延伸，沿途可以看到奇岩、礫灘、海蝕地形與亞熱帶植物。這次不以走完整段為目標，而是挑最適合拍照與散步的一段，慢慢感受太平洋的風、浪與地質景觀。\n\n從御厨人窟開始一路往南走，動線會比先到岬角再折返更自然，也更適合最後往住宿方向收尾。",
  nearby: [
    {
      name: "➀ 室戸岬",
      note: "室戶岬最南端一帶，可視時間停留拍海岸與岬角景色。",
      map: mapSearch("室戸岬")
    },
    {
      name: "➁ 室戸岬灯台",
      note: "位於岬角高處的白色燈塔。若下午進度順利，可和最御崎寺一起前往。",
      map: mapSearch("室戸岬灯台")
    },
    {
      name: "➂ 最御崎寺",
      note: "四國八十八箇所第24番札所。時間足夠再安排，不為完成清單而趕路。",
      map: mapSearch("最御崎寺")
    }
  ],
  highlights: [
    "今日最重要的自然景觀",
    "建議停留約 1 小時",
    "不必走完整條遊步道",
    "海風較強，準備保暖外套",
    "燈塔與最御崎寺依時間彈性追加"
  ],
  map: mapSearch("乱礁遊歩道 室戸岬"),
  tags: ["海岸", "地質", "攝影", "散步"],
  status: "confirmed"
},
{
  time: "16:45",
  title: "入住 室戸岬の宿 うまめの木",
  eyebrow: "海邊小宿・晚餐",
  summary: "從室戶岬西側收尾，住進海邊小宿，用當地天然魚料理結束東海岸的第一天。",
  detail: "下午完成御厨人窟與亂礁遊步道後，沿室戶岬道路往西側前往今晚住宿「室戸岬の宿 うまめの木」。\n\n目前已寄信詢問 2026 年 11 月 19 日兩人住宿，希望安排海側和室、一泊二食，並詢問每人約 11,000～14,000 日圓的料理升級方案。住宿為樸實的傳統民宿形式，浴室與廁所為共用設施，魅力主要在室戶岬附近的位置、海側和室與使用室戶當地天然魚製作的晚餐。",
  highlights: [
    "目前已寄信詢問，等待旅宿回覆",
    "希望海側和室",
    "一泊二食",
    "希望每人 ¥11,000～14,000 左右料理方案",
    "現場僅收現金",
    "免費停車約 5 台",
    "Check-in 15:30 起"
  ],
  note: "待旅宿回信後，更新房型、最終價格與料理方案。",
  map: "https://maps.app.goo.gl/aodQrkqn7N3u82JUA",
  tags: ["住宿", "民宿", "海鮮", "室戶"],
  status: "flex"
}
]
},
{
  date: "11/20",
  weekday: "五",
  place: "東洋町・海陽",
  title: "沿著海岸，從土佐走進阿波",
  lodging: "Pension Shishikui ペンションししくい",
  lodgingMap: "https://maps.app.goo.gl/71D7wtjA5mqDgMDV7",
  lodgingNote: "已預訂",
  stops: [
    {
      time: "08:30",
      title: "うまめの木・早餐退房",
      eyebrow: "室戶清晨",
      summary: "吃完海邊小宿的早餐，從室戶岬沿國道55號一路向東。",
      detail: "早餐後從「室戸岬の宿 うまめの木」退房。今天不安排趕路型行程，而是沿著四國東南端的海岸線，從高知縣慢慢進入德島縣。\n\n如果前一天下午因時間或天候沒有完成室戶岬燈塔、最御崎寺，可以利用早上補看；如果已經完成，就直接出發往東洋町。",
      highlights: [
        "住宿早餐後退房",
        "前一日未完成的最御崎寺／燈塔可早上補看",
        "今天主要沿國道55號移動",
        "不安排海中觀光船"
      ],
      map: "https://maps.app.goo.gl/aodQrkqn7N3u82JUA",
      tags: ["早餐", "移動", "海岸"],
      status: "confirmed"
    },
    {
      time: "10:15",
      title: "春日神社・千年杉",
      eyebrow: "野根川山村",
      summary: "離開太平洋岸一小段，在千年古杉與地方神社之間感受東洋町的山村信仰。",
      detail: "春日神社位於東洋町野根川沿線的名留川地區，境內生長著多棵據說樹齡約千年的神木。這裡不是大型觀光神社，而是一處帶有強烈地方信仰與山村氣息的小景點。\n\n當地每年還會舉行流鏑馬祭典，騎手穿著傳統裝束策馬射箭，已被指定為東洋町的無形民俗文化財。即使不是祭典期間，古杉與安靜的神社環境本身就很值得停留。",
      highlights: [
        "多棵據說樹齡約千年的神木",
        "流鏑馬為東洋町無形民俗文化財",
        "建議停留約30–40分鐘",
        "屬地方型小景點，保持安靜"
      ],
      map: mapSearch("春日神社 千年杉 東洋町"),
      tags: ["神社", "古樹", "地方文化", "攝影"],
      status: "confirmed"
    },
    {
      time: "11:30",
      title: "白濱海岸・道の駅 東洋町",
      eyebrow: "海岸午餐",
      summary: "回到太平洋岸，在白沙海灘旁休息，用地方海產與柑橘補充體力。",
      detail: "白濱海岸就在東洋町海岸線上，適合作為今天的中段休息點。這裡不需要安排長時間散步，天氣好時到海邊看海、拍照即可。\n\n旁邊的道の駅東洋町販售當地鮮魚、干物、農產品與東洋町特產。午餐以當天漁獲或簡單定食為主，也可以留意東洋町代表性的椪柑相關商品。",
      nearby: [
        {
          name: "➀ 白浜海水浴場",
          note: "白砂與淺藍色海水是東洋町代表性海岸景觀，停留約20分鐘即可。",
          map: mapSearch("白浜海水浴場 東洋町")
        },
        {
          name: "➁ 道の駅 東洋町",
          note: "可買當地鮮魚、干物、農產與椪柑產品，也是今天午餐與休息的第一順位。",
          map: mapSearch("道の駅 東洋町")
        }
      ],
      highlights: [
        "午餐與休息合併安排",
        "地方鮮魚與干物可留意",
        "東洋町特產椪柑",
        "白濱海岸不需停留太久"
      ],
      map: mapSearch("道の駅 東洋町"),
      tags: ["午餐", "海岸", "道の駅", "地方美食"],
      status: "confirmed"
    },
    {
      time: "13:15",
      title: "甲浦・小鎮散步",
      eyebrow: "港町信仰",
      summary: "在高知縣最後一個海邊小鎮，走訪八幡宮與熊野神社。",
      detail: "甲浦位於高知與德島縣界附近，是沿海公路進入阿波之前很適合短暫停下來的小鎮。\n\n甲浦八幡宮位於甲浦站附近，是地方祭典與神輿巡行的重要中心；熊野神社則流傳著紀州那智熊野權現飛來此地的傳說，也有『神が来た浦』逐漸演變成『甲浦』地名的說法。\n\n這裡不用逐一深度參拜，把兩座神社與周邊町內小路串成約45分鐘的小散步即可。",
      nearby: [
        {
          name: "➀ 甲浦八幡宮",
          note: "地方祭典與神輿巡行的重要神社，位於甲浦站附近。",
          map: mapSearch("甲浦八幡宮")
        },
        {
          name: "➁ 甲浦熊野神社",
          note: "與紀州熊野信仰及甲浦地名傳說相關的小神社。",
          map: mapSearch("甲浦熊野神社")
        }
      ],
      highlights: [
        "高知縣東端的小港町",
        "兩座神社合併成短程散步",
        "建議約45–60分鐘",
        "之後正式進入德島縣"
      ],
      map: mapSearch("甲浦駅"),
      tags: ["港町", "神社", "文化", "散步"],
      status: "confirmed"
    },
    {
      time: "14:45",
      title: "城滿寺",
      eyebrow: "四國最古的禪寺",
      summary: "進入海陽町後，從海岸轉進一座安靜的古寺與庭園。",
      detail: "城滿寺位於德島縣海陽町，是當地觀光協會介紹的四國最古老禪寺之一。寺院歷史可追溯至鎌倉時代，戰國時期曾遭焚毀，之後歷經數百年才重新復興。\n\n現在寺內有庭園、茶室與禪寺空間，也有小型步道路線。這次不安排坐禪體驗或完整trail，只把它當作下午安靜散步與歷史文化停點。",
      highlights: [
        "鎌倉時代以來的禪寺歷史",
        "戰國時代燒失後重新復興",
        "庭園與寺院空間是重點",
        "建議停留約45–60分鐘"
      ],
      map: mapSearch("城満寺 海陽町"),
      tags: ["寺院", "歷史", "庭園", "文化"],
      status: "confirmed"
    },

    {
      time: "16:15",
      title: "水床灣・宍喰海岸",
      eyebrow: "住宿前散步",
      summary: "入住前先看一眼宍喰代表性的海灣與大小島嶼，把午後留在海邊。",
      detail: "水床灣是宍喰代表性的海岸景觀，海灣中散布著大小島嶼與奇岩。今天不安排搭船或水上活動，只在住宿附近看海、散步，讓移動日慢慢收尾。\n\n如果城滿寺停留較久，這張卡可以直接略過，不需要為了看海再趕時間。",
      highlights: [
        "住宿附近的自然景觀",
        "以短程散步與拍照為主",
        "不安排海中觀光船",
        "時間不足可直接入住"
      ],
      map: mapSearch("水床湾 海陽町"),
      tags: ["海景", "散步", "夕景"],
      status: "flex"
    },

    {
      time: "17:00",
      title: "入住 Pension Shishikui",
      eyebrow: "宍喰住宿",
      summary: "停在海邊的 Pension，結束從土佐跨進阿波的海岸公路日。",
      detail: "今晚住宿已確認為「Pension Shishikui／ペンションししくい」。位置就在宍喰、水床灣一帶，適合結束今天從室戶沿海岸一路東行的路線。\n\n入住後不再安排遠距離移動。晚餐方案與住宿細節依實際預訂內容為準，晚上以住宿附近散步、休息為主，為隔天前往日和佐與阿南保留體力。",
      highlights: [
        "住宿已預訂",
        "位置鄰近宍喰海岸與水床灣",
        "入住後不再長途開車",
        "隔日往日和佐方向北上"
      ],
      map: "https://maps.app.goo.gl/71D7wtjA5mqDgMDV7",
      tags: ["住宿", "宍喰", "海岸"],
      status: "confirmed"
    }
  ]
},
  {
  date: "11/21",
  weekday: "六",
  place: "日和佐・德島",
  title: "從海龜之町，走進阿波城下",
  lodging: "ダイワロイネットホテル徳島駅前",
  lodgingMap: "https://maps.app.goo.gl/KwAriL5gDYcPs5iz8",
  lodgingNote: "11/21、11/22 連住兩晚",
  stops: [
    {
      time: "08:30",
      title: "Pension Shishikui 退房",
      eyebrow: "海岸線北上",
      summary: "離開宍喰海岸，沿著德島南部海岸一路往北，走進日和佐與阿波遍路文化。",
      detail: "早餐後從 Pension Shishikui 退房。今天不安排長距離趕路，而是沿著德島南部海岸慢慢北上。\n\n上午留給日和佐的海岸與藥王寺，下午再前往德島市入住。晚上不需要再開車，可以在德島站周邊散步與用餐。",
      highlights: [
        "宍喰 → 日和佐約1小時左右",
        "今天主題為海岸、小鎮與遍路文化",
        "下午入住德島市後不再移動"
      ],
      map: mapSearch("Pension Shishikui"),
      tags: ["移動", "海岸", "德島"],
      status: "confirmed"
    },
    {
      time: "09:40",
      title: "大濱海岸",
      eyebrow: "海龜之町",
      summary: "在太平洋海岸短暫停留，感受日和佐小鎮與大海之間的距離。",
      detail: "大濱海岸是日和佐最具代表性的自然景觀之一，也是日本知名的海龜產卵地。\n\n這裡不安排長時間停留，而是作為進入日和佐前的小型海岸散步點。十一月不是海龜季節，但秋冬海岸的遼闊感仍值得停下腳步。",
      highlights: [
        "建議停留約20–30分鐘",
        "適合拍攝海岸線與太平洋景色",
        "不安排海龜博物館為主線"
      ],
      map: "https://maps.app.goo.gl/HbSkm1HC7iCbGKBA6",
      tags: ["海岸", "自然", "攝影"],
      status: "confirmed"
    },
    {
      time: "10:30",
      title: "藥王寺（第23番札所）",
      eyebrow: "四國遍路",
      summary: "登上朱色石階與寺院空間，從高處眺望日和佐與太平洋。",
      detail: "藥王寺是四國八十八箇所第23番札所，也是日和佐最重要的地標。\n\n寺院位於山坡上，從山門、石階到高處的瑜祇塔，都能感受到四國遍路文化與地方信仰。這裡不只是參拜景點，也是一處可以慢慢觀看小鎮與海景關係的地方。",
      highlights: [
        "四國八十八箇所第23番",
        "建議停留約1–1.5小時",
        "石階較多，建議穿好走鞋",
        "適合拍寺院與日和佐街景"
      ],
      nearby: [
        {
          name: "➀ 日和佐門前町",
          note: "藥王寺山腳周邊的小街，可配合參拜後散步。",
          map: "https://maps.app.goo.gl/Q2kb4SRSRrLMREF98"
        },
        {
          name: "➁ at Teramae",
          note: "咖啡店。",
          map: "https://maps.app.goo.gl/s2k15EEN5W6XUuvw7"
        }
      ],
      map: "https://maps.app.goo.gl/x2pfB4tCCozhGwiU6",
      tags: ["寺院", "遍路", "歷史", "攝影"],
      status: "confirmed"
    },

    {
      time: "12:00",
      title: "日和佐午餐",
      eyebrow: "地方料理",
      summary: "留在海邊小鎮吃午餐，不急著趕往下一站。",
      detail: "午餐安排在日和佐，讓今天保留小鎮旅行的節奏。\n\n候選方向以當地魚料理、阿波尾雞與定食為主。實際餐廳依營業日與當天狀況調整。",
      restaurants: [
        {
          name: "➀ ひわさ屋",
          map: "https://maps.app.goo.gl/ExXPCUziCvMPMA4EA",
          note: "以阿波尾雞、地魚料理與定食為主的地方餐廳候選。"
        }
      ],
      highlights: [
        "午餐停留約1小時",
        "優先選日和佐地方料理",
        "避免為了吃飯再繞路"
      ],
      map: mapSearch("日和佐駅"),
      tags: ["午餐", "地方料理"],
      status: "flex"
    },

    {
      time: "13:30",
      title: "平等寺（第22番札所）",
      eyebrow: "山村中的遍路寺",
      summary: "從海邊城鎮進入山間寺院，感受另一種四國遍路氣氛。",
      detail: "平等寺是四國八十八箇所第22番札所，與上午的藥王寺形成很好的對比。\n\n藥王寺位於海邊城鎮、規模較大；平等寺則更安靜，更接近地方信仰中的日常寺院。建議慢慢走過山門、境內與石階，不需要匆忙離開。",
      highlights: [
        "四國八十八箇所第22番",
        "建議停留約40–50分鐘",
        "與藥王寺形成文化對照",
        "下午光線適合拍寺院細節"
      ],
      map: mapSearch("平等寺 徳島"),
      tags: ["寺院", "遍路", "文化"],
      status: "confirmed"
    },

    {
      time: "15:00",
      title: "前往德島市",
      eyebrow: "城市入住",
      summary: "離開南德島，往今晚住宿的德島站前前進。",
      detail: "下午前往德島市。抵達後不再安排長途移動，讓晚上成為城市散步時間。\n\n住宿選在德島站前，方便步行前往餐廳、新町川與市區景點。",
      highlights: [
        "日和佐／平等寺 → 德島市約1小時",
        "入住後不再開車",
        "晚上可安排德島市區散步"
      ],
      map: mapSearch("ダイワロイネットホテル徳島駅前"),
      tags: ["移動", "住宿"],
      status: "confirmed"
    },

    {
      time: "16:30",
      title: "入住 ダイワロイネットホテル徳島駅前",
      eyebrow: "德島市基地",
      summary: "連住兩晚，把德島市作為探索東德島的基地。",
      detail: "今晚入住ダイワロイネットホテル徳島駅前，11/21、11/22連住兩晚。\n\n德島站前的位置適合晚上步行用餐，也方便隔日前往太龍寺或市區文化景點。",
      restaurants: [
        {
          name: "➀ 德島拉麵候選",
          map: mapSearch("德島駅 德島拉麺"),
          note: "入住後可依距離、營業時間選擇。"
        },
        {
          name: "➁ 德島居酒屋",
          map: mapSearch("徳島駅 居酒屋"),
          note: "可品嘗阿波尾雞、地酒等地方料理。"
        }
      ],
      highlights: [
        "住宿已預訂",
        "11/21、11/22連住兩晚",
        "停車與晚餐依飯店規定確認",
        "晚上可步行探索德島站周邊"
      ],
      map: "https://maps.app.goo.gl/KwAriL5gDYcPs5iz8",
      tags: ["住宿", "德島市", "晚餐"],
      status: "confirmed"
    }
  ]
},
  {
  date: "11/22",
  weekday: "日",
  place: "太龍寺・德島",
  title: "山岳遍路，走進阿波信仰",
  lodging: "ダイワロイネットホテル徳島駅前",
  lodgingMap: "https://maps.app.goo.gl/KwAriL5gDYcPs5iz8",
  lodgingNote: "11/21、11/22 連住兩晚",
  stops: [
    {
      time: "08:30",
      title: "德島市早餐・前往太龍寺",
      eyebrow: "山岳之旅",
      summary: "從德島站前出發，前往四國遍路第21番札所太龍寺。",
      detail: "今天以太龍寺為主角。從德島市區出發前往太龍寺纜車站，車程約50～60分鐘。\n\n太龍寺位於太龍寺山上，有「西の高野」之稱。相比前幾天海岸線上的寺院，今天將進入四國山地信仰的核心。",
      highlights: [
        "早餐後約08:30出發",
        "德島市 → 太龍寺纜車站約50–60分鐘",
        "建議穿好走鞋",
        "山區氣溫較低，準備外套"
      ],
      map: mapSearch("ダイワロイネットホテル徳島駅前"),
      tags: ["移動", "遍路", "山岳"],
      status: "confirmed"
    },

    {
      time: "09:45",
      title: "太龍寺纜車",
      eyebrow: "山谷之間",
      summary: "搭乘跨越山谷的長距離纜車，前往山上的古寺。",
      detail: "太龍寺纜車本身就是旅程的一部分。從山麓出發，纜車跨越谷地上升，沿途可以欣賞四國山林景色。\n\n相比自行開山路，搭纜車更能放鬆欣賞環境，也符合這趟慢旅行的節奏。",
      highlights: [
        "纜車約10分鐘",
        "依現場營運時間搭乘",
        "天候不佳時確認運行狀況",
        "山上停留時間建議抓1.5小時以上"
      ],
      map: mapSearch("太龍寺ロープウェイ"),
      tags: ["纜車", "山景", "攝影"],
      status: "confirmed"
    },

    {
      time: "10:15",
      title: "太龍寺（第21番札所）",
      eyebrow: "西の高野",
      summary: "在山頂古寺中，感受四國遍路最具山岳氣息的一站。",
      detail: "太龍寺是四國八十八箇所第21番札所，位於標高約600公尺的太龍寺山上。\n\n寺院與弘法大師空海有深厚關聯，境內有本堂、大師堂與多處歷史建築。這裡不像城市寺院，而是一處被山林包圍的信仰空間。",
      highlights: [
        "四國八十八箇所第21番",
        "建議停留約1.5–2小時",
        "本堂、大師堂、山林景觀",
        "適合慢慢感受寺院氣氛"
      ],
      nearby: [
        {
          name: "➀ 道の駅 鷲の里",
          note: "位於太龍寺纜車山麓站附近，可作為午餐與休息點。",
          map: mapSearch("道の駅 鷲の里")
        }
      ],
      map: mapSearch("太龍寺 徳島"),
      tags: ["寺院", "遍路", "歷史", "山景"],
      status: "confirmed"
    },

    {
      time: "12:30",
      title: "午餐・鷲之里",
      eyebrow: "山麓休息",
      summary: "離開太龍寺後，在纜車站附近簡單午餐。",
      detail: "午餐不安排遠距離移動，優先利用太龍寺纜車附近設施休息。\n\n如果當天想早點回德島市，也可以回市區再用餐；保持彈性，不讓午餐影響下午文化行程。",
      highlights: [
        "午餐以方便為優先",
        "不為吃飯繞路",
        "依太龍寺參觀時間調整"
      ],
      map: mapSearch("道の駅 鷲の里"),
      tags: ["午餐", "休息"],
      status: "flex"
    },

    {
      time: "14:00",
      title: "恩山寺（第18番札所）",
      eyebrow: "地方遍路寺",
      summary: "從山岳大寺回到安靜寺院，延續四國遍路文化。",
      detail: "恩山寺是四國八十八箇所第18番札所。相較於太龍寺的山岳氣勢，恩山寺更接近地方日常中的寺院。\n\n將兩座寺院放在同一天，可以感受到四國遍路不同面貌：一座是山林中的大寺，一座是村落中的信仰空間。",
      highlights: [
        "四國八十八箇所第18番",
        "建議停留約30–45分鐘",
        "寺院規模較小，適合慢慢觀看",
        "與太龍寺形成對比"
      ],
      map: mapSearch("恩山寺 徳島"),
      tags: ["寺院", "遍路", "文化"],
      status: "confirmed"
    },

    {
      time: "15:30",
      title: "阿波舞會館・眉山",
      eyebrow: "德島文化",
      summary: "回到城市，用阿波舞與山頂展望認識德島。",
      detail: "下午回到德島市後，安排德島最具代表性的文化體驗。\n\n阿波舞會館可以了解德島夏日祭典文化；若時間與天候合適，可搭眉山纜車上山，看德島市區與吉野川方向。",
      highlights: [
        "阿波舞會館依演出時間安排",
        "眉山展望依天候決定",
        "不追求全部完成，保留城市散步時間"
      ],
      map: mapSearch("阿波おどり会館"),
      tags: ["文化", "展望", "德島"],
      status: "flex"
    },

    {
      time: "17:30",
      title: "德島站前散步・晚餐",
      eyebrow: "城市夜晚",
      summary: "回到住宿附近，用地方料理結束德島文化日。",
      detail: "住宿位於德島站前，晚上不需要開車。\n\n可依體力選擇德島拉麵、阿波尾雞、居酒屋或新町川周邊散步。",
      restaurants: [
        {
          name: "➀ 德島拉麵候選",
          map: mapSearch("徳島駅 徳島ラーメン"),
          note: "可依排隊與營業時間現場選擇。"
        },
        {
          name: "➁ 阿波尾雞・居酒屋",
          map: mapSearch("徳島駅 居酒屋 阿波尾鶏"),
          note: "適合品嘗德島地方料理與地酒。"
        }
      ],
      highlights: [
        "晚上不開車",
        "住宿周邊步行即可",
        "準備隔日鳴門與淡路島行程"
      ],
      map: mapSearch("ダイワロイネットホテル徳島駅前"),
      tags: ["住宿", "晚餐", "城市散步"],
      status: "confirmed"
    }
  ]
},
{
  date: "11/23",
  weekday: "一",
  place: "鳴門・淡路島",
  title: "越過海峽，走進國生神話",
  lodging: "MAGATAMA.INN",
  lodgingMap: "https://maps.app.goo.gl/rCEhLTdrxnFvVVcT8?g_st=ic",
  lodgingNote: "洲本｜目前暫定",
  stops: [
    {
      time: "08:15",
      title: "德島市退房・前往鳴門",
      eyebrow: "海峽之日",
      summary: "離開德島市，往四國東北端前進，把今天完整留給鳴門海峽與淡路島。",
      detail: "早餐後從ダイワロイネットホテル徳島駅前退房，往鳴門方向前進。\n\n今天不再安排大塚國際美術館，將時間留給鳴門海峽、觀潮船與進入淡路島後的南淡路景點。11:00 的 Wonder Naruto 船班是今天最重要的固定時間，因此上午所有行程都以不錯過乘船時間為原則。",
      highlights: [
        "08:15左右從德島市出發",
        "今天的固定核心為11:00 Wonder Naruto",
        "不安排大塚國際美術館",
        "行李全程放在車上"
      ],
      map: "https://maps.app.goo.gl/KwAriL5gDYcPs5iz8",
      tags: ["移動", "鳴門", "海峽"],
      status: "confirmed"
    },
    {
      time: "09:10",
      title: "鳴門公園・渦之道",
      eyebrow: "橋上觀潮",
      summary: "先從大鳴門橋下方俯瞰海峽，從高處理解鳴門潮流的尺度。",
      detail: "上午先到鳴門公園與渦之道。渦之道位於大鳴門橋車道下方，可以從海面上方俯瞰鳴門海峽與潮流。\n\n今天不需要在這裡停留太久，因為真正的近距離渦潮體驗留給11:00的Wonder Naruto。這一站的重點，是先從高處看海峽、大橋與潮流方向，再換到船上從海面感受。",
      nearby: [
        {
          name: "➀ 千畳敷展望台",
          note: "鳴門公園代表性的展望位置，可拍攝大鳴門橋與海峽。",
          map: mapSearch("千畳敷展望台 鳴門")
        },
        {
          name: "➁ 大鳴門橋架橋記念館 エディ",
          note: "如果天候不佳或時間有餘，可作為鳴門海峽與大橋相關的室內備選。",
          map: mapSearch("大鳴門橋架橋記念館 エディ")
        }
      ],
      highlights: [
        "以橋上俯瞰海峽為主",
        "停留約45–60分鐘",
        "不要為了走完整條渦之道而錯過船班",
        "10:15左右開始往觀潮船乘船處移動"
      ],
      map: mapSearch("渦の道 鳴門"),
      tags: ["鳴門", "海峽", "展望", "攝影"],
      status: "confirmed"
    },
    {
      time: "11:00",
      title: "Wonder Naruto・鳴門觀潮船",
      eyebrow: "今日主景",
      summary: "搭大型觀潮船駛入鳴門海峽，在大潮強流時段近距離感受渦潮。",
      detail: "今天已確定搭乘11:00的「わんだーなると／Wonder Naruto」大型觀潮船。\n\n這個時間接近11月23日當天南流強潮時段，也是今天最需要準時完成的行程。與早上的渦之道不同，觀潮船會從海面高度接近潮流區，可以更直接感受海水速度、浪與渦潮的力量。\n\n建議提早抵達乘船處，先完成停車、購票與登船準備，不要壓線。",
      highlights: [
        "已決定搭11:00 Wonder Naruto",
        "11/23為大潮日",
        "建議至少提早30分鐘抵達乘船處",
        "容易暈船可提前準備暈船藥",
        "相機與手機注意海風及水氣"
      ],
      note: "出發前再次確認當日船班、天候與是否正常出航。",
      map: mapSearch("うずしお観潮船 わんだーなると"),
      tags: ["渦潮", "觀潮船", "海峽", "必去"],
      status: "confirmed"
    },
    {
      time: "12:15",
      title: "鳴門・午餐",
      eyebrow: "海邊午餐",
      summary: "觀潮結束後在鳴門一帶吃午餐，再正式跨越大鳴門橋。",
      detail: "搭完觀潮船後不急著立刻上高速，在鳴門附近安排午餐與短暫休息。\n\n餐廳目前不寫死，以鳴門鯛、海鮮、鳴門わかめ等地方料理為優先。今天下午還要進淡路島，因此午餐以順路、停車方便為主。",
      highlights: [
        "午餐預留約1小時",
        "鳴門鯛、海鮮為第一順位",
        "不為特定餐廳大幅繞路",
        "午餐後正式跨橋進淡路島"
      ],
      map: mapSearch("鳴門公園 ランチ"),
      tags: ["午餐", "鳴門", "地方料理"],
      status: "flex"
    },
    {
      time: "13:30",
      title: "跨越大鳴門橋・進入淡路島",
      eyebrow: "從四國到淡路",
      summary: "離開四國本島，跨過鳴門海峽，正式進入淡路島。",
      detail: "午餐後開車跨越大鳴門橋。上午已經從橋上與船上看過鳴門海峽，現在則真正開車越過它。\n\n這不只是一段交通移動，也是整趟旅程重要的地理轉場：從四國東端跨進淡路島，開始最後幾天的瀨戶內與國生神話篇章。",
      highlights: [
        "從德島縣進入兵庫縣淡路島",
        "橋上禁止任意停車",
        "抵達淡路島後先前往道の駅うずしお"
      ],
      map: mapSearch("大鳴門橋"),
      tags: ["跨海", "大鳴門橋", "淡路島"],
      status: "confirmed"
    },
    {
      time: "14:00",
      title: "道の駅うずしお",
      eyebrow: "淡路島第一站",
      summary: "從淡路島側重新看向大鳴門橋與海峽，買些洋蔥與地方物產。",
      detail: "進入淡路島後，第一站安排在南端的「道の駅うずしお」。\n\n上午是從德島側看鳴門海峽，到了這裡則換成淡路島側回望大鳴門橋。除了展望，也可以看看淡路島洋蔥、地方加工品與伴手禮。\n\n這裡不安排長時間用餐，停留約30～45分鐘即可。",
      highlights: [
        "淡路島側的大鳴門橋景觀",
        "淡路島洋蔥與地方物產",
        "停留約30–45分鐘",
        "以展望、購物、休息為主"
      ],
      map: mapSearch("道の駅うずしお"),
      tags: ["道の駅", "海峽", "伴手禮", "淡路島"],
      status: "confirmed"
    },
    {
      time: "15:15",
      title: "自凝島神社",
      eyebrow: "國生神話",
      summary: "從鳴門海峽走進淡路島的創世傳說，在巨大朱紅鳥居下認識國生神話。",
      detail: "自凝島神社（おのころ島神社）與伊弉諾尊、伊弉冉尊的國生神話密切相關。相傳二神以天沼矛攪動大海，形成「おのころ島」，並由此開始孕育日本諸島。\n\n自凝島所在地存在不同傳說，但南淡路的這座神社是最具代表性的國生神話景點之一。巨大朱紅鳥居非常醒目，境內另有與二神緣結傳說相關的鶺鴒石。\n\n這裡規模不算大，重點不是長時間參拜，而是理解『為什麼淡路島會被視為日本創世神話的重要舞台』。",
      highlights: [
        "淡路島國生神話代表景點",
        "巨大朱紅鳥居",
        "主祭神與伊弉諾・伊弉冉相關",
        "建議停留約30–45分鐘",
        "之後往洲本方向前進"
      ],
      map: mapSearch("おのころ島神社"),
      tags: ["神社", "神話", "歷史", "攝影"],
      status: "confirmed"
    },
    {
      time: "16:15",
      title: "若人の広場公園",
      eyebrow: "建築・展望",
      summary: "若時間與體力足夠，在福良灣上方看丹下健三建築與南淡路景色。",
      detail: "若下午進度順利，可前往若人の広場公園。這裡的紀念設施由丹下健三設計，具有戰後建築與地方歷史意義，同時可以從高處眺望福良灣與南淡路景色。\n\n這張卡完全保留彈性。如果自凝島神社停留較久、天候不好，或想早一點抵達洲本，就直接取消，不影響主線。",
      highlights: [
        "丹下健三設計",
        "建築＋歷史＋展望",
        "停留約30–45分鐘",
        "時間不足可直接略過"
      ],
      map: mapSearch("若人の広場公園"),
      tags: ["建築", "歷史", "展望", "彈性"],
      status: "flex"
    },
    {
      time: "17:30",
      title: "入住 MAGATAMA.INN・洲本",
      eyebrow: "淡路島第一晚",
      summary: "抵達洲本城下町，結束從德島跨越鳴門海峽進入淡路島的一天。",
      detail: "今晚暫定住宿為洲本市的 MAGATAMA.INN，地址位於 3 Chome-3-9 Yamate, Sumoto, Hyogo。\n\n從南淡路一路北上至洲本後，今晚不再安排遠距離移動。可以依抵達時間在洲本市區找晚餐，或在大濱海岸、洲本城下町附近簡單散步。\n\n隔天11/24才是淡路島的DQ主題日，因此今晚以休息為主，不提前把二次元之森塞進行程。",
      nearby: [
        {
          name: "➀ 大浜海岸",
          note: "若抵達洲本時天色尚可，可在住宿前後短暫走到海邊散步。",
          map: mapSearch("大浜海岸 洲本")
        },
        {
          name: "➁ 洲本城跡",
          note: "不安排夜間登城；若隔日或其他時段有餘裕，再視情況調整。",
          map: mapSearch("洲本城跡")
        }
      ],
      highlights: [
        "住宿目前暫定",
        "地址：3 Chome-3-9 Yamate, Sumoto, Hyogo",
        "抵達後不再長途駕駛",
        "晚上可在洲本市區用餐",
        "隔日11/24前往DQ Island"
      ],
      note: "MAGATAMA.INN 尚未標記為正式確認，訂房完成後可把住宿狀態更新為已預訂。",
      map: "https://maps.app.goo.gl/rCEhLTdrxnFvVVcT8?g_st=ic",
      tags: ["住宿", "洲本", "淡路島"],
      status: "flex"
    }
  ]
},
  {
  date: "11/24",
  weekday: "二",
  place: "淡路島・DQ Island",
  title: "勇者的島，今晚住進史萊姆",
  lodging: "GRAND CHARIOT 北斗七星135°",
  lodgingMap: mapSearch("GRAND CHARIOT 北斗七星135°"),
  lodgingNote: "スライムのコクーン〈和〉｜夕朝食付｜DQ住宿特典",
  stops: [
    {
      time: "08:30",
      title: "MAGATAMA.INN 退房・往淡路島北部",
      eyebrow: "勇者之日",
      summary: "離開洲本，沿淡路島一路向北，正式進入整趟旅程最期待的 Dragon Quest 主題日。",
      detail: "早餐與整理行李後，從 MAGATAMA.INN 退房。今天不安排其他大型景點，把完整時間留給二次元之森、Dragon Quest Island 與 GRAND CHARIOT。\n\n從洲本往淡路島北部移動，抵達二次元之森指定停車場後，不需要先正式 Check-in，即可依住宿 FAQ 的流程先寄放行李並領取住宿特典票券。",
      highlights: [
        "約08:30退房",
        "今天不安排其他大型景點",
        "行李直接帶往 GRAND CHARIOT",
        "抵達停車場後先辦寄放行李與領票"
      ],
      map: "https://maps.app.goo.gl/rCEhLTdrxnFvVVcT8?g_st=ic",
      tags: ["退房", "移動", "淡路島"],
      status: "confirmed"
    },
    {
      time: "10:00",
      title: "二次元之森停車場・聯絡 GRAND CHARIOT",
      eyebrow: "寄放行李・領住宿特典",
      summary: "抵達停車場後先打電話聯絡飯店，由專用車接送，寄放行李並領取 DQ Island 住宿特典票券。",
      detail: "GRAND CHARIOT 位於一般車輛無法直接開到門口的位置，因此抵達二次元之森停車場後，依官方 FAQ 指示，先打電話聯絡飯店。\n\n電話：0799-64-7090\n\n告知今天有住宿預約、已抵達停車場，並希望在正式 Check-in 前先寄放行李及領取住宿特典票券。飯店會安排專用車接送。\n\n住宿方案每位住宿者附 DQ Island Light Ticket。今天預計在正式入住前先使用，因此領票時也一併詢問 Premium 升級方式。",
      highlights: [
        "抵達停車場後先聯絡 GRAND CHARIOT",
        "電話：0799-64-7090",
        "由飯店專用車接送",
        "Check-in 前可先寄放行李",
        "Check-in 前可先領住宿附 DQ Light Ticket"
      ],
      nearby: [
        {
          name: "電話日文",
          note: "こんにちは。本日宿泊予定のワン ユンユーです。今、ニジゲンノモリの駐車場に着きました。チェックイン前に宿泊特典のチケットを受け取りたいです。荷物も預けたいです。お迎えをお願いできますか。"
        },
        {
          name: "電話英文",
          note: "Hello, this is Wang Yun-Yu. I have a reservation for today. We have just arrived at the Nijigen no Mori parking lot. We would like to get our accommodation tickets before check-in and leave our luggage. Could you please pick us up?"
        }
      ],
      note: "實際指定停車場位置以住宿確認信與當日 GRAND CHARIOT 指示為準。",
      map: mapSearch("ニジゲンノモリ F駐車場"),
      tags: ["停車", "接送", "寄放行李", "領票"],
      status: "confirmed"
    },
    {
      time: "10:30",
      title: "DQ Ticket・Premium 升級確認",
      eyebrow: "住宿特典",
      summary: "領取住宿附的 Light Ticket，同時確認先生升級 Premium、兩人是否可選不同票種。",
      detail: "スライムのコクーン〈和〉住宿方案包含每位住宿者一張 DQ Island Light Ticket。\n\n官方住宿資訊亦標示，可補差額升級 Gold 或 Premium。先生目前以 Premium 為第一順位；另一位可依當天限定周邊與實際方案，再決定 Gold 或 Premium。\n\n領票時需確認三件事：是否能當場升級 Premium、兩位住宿者是否可以選擇不同票種，以及實際需補多少差額。",
      highlights: [
        "住宿每人附一張 Light Ticket",
        "先生：Premium 優先",
        "另一位：Gold 或 Premium 現場決定",
        "確認兩人是否能升不同票種",
        "確認當日 Premium 補差額",
        "確認 Premium 限定周邊庫存"
      ],
      note: "Premium 升級方式、差額與不同票種搭配目前保留現場／事前確認，不先標記為完全確定。",
      map: mapSearch("ドラゴンクエスト アイランド"),
      tags: ["DQ", "Premium", "票券", "住宿特典"],
      status: "flex"
    },
    {
      time: "11:00",
      title: "Dragon Quest Island",
      eyebrow: "今日主景",
      summary: "正式成為冒險者，把白天完整留給 Dragon Quest Island 主線與支線任務。",
      detail: "今天的主角是二次元之森 Dragon Quest Island。\n\n2026 年版本為「いにしえの魔神と導かれし冒険者たち」。住宿附的是 Light Ticket，如果現場升級 Premium，則可在主線之外體驗 Gold 對應的支線內容，並取得 Premium 限定特典。\n\n因為先生本身非常喜歡 Dragon Quest，所以今天不以『快速破關』為目標，而是預留足夠時間看場景、解任務、拍照、逛商店與感受園區細節。",
      highlights: [
        "2026版：いにしえの魔神と導かれし冒険者たち",
        "Light：主線任務",
        "Gold：主線＋支線",
        "Premium：Gold內容＋限定特典",
        "建議預留約4小時以上",
        "不另外安排其他大型淡路島景點"
      ],
      map: mapSearch("ドラゴンクエスト アイランド ニジゲンノモリ"),
      tags: ["Dragon Quest", "二次元之森", "主題樂園", "必去"],
      status: "confirmed"
    },
    {
      time: "15:30",
      title: "GRAND CHARIOT Check-in",
      eyebrow: "入住主題旅宿",
      summary: "結束白天冒險後，由二次元之森進入今晚真正的主角——GRAND CHARIOT 北斗七星135°。",
      detail: "下午結束 DQ Island 後正式辦理 GRAND CHARIOT Check-in。\n\n今晚住宿的是 Dragon Quest 聯名房型「スライムのコクーン〈和〉」。房型約60㎡，以日式現代空間結合 Dragon Quest 元素，並設有私人露台與檜木風呂。\n\n正式入住後不再安排開車外出，接下來的時間全部留給房間、晚餐與住宿本身。",
      highlights: [
        "入住：GRAND CHARIOT 北斗七星135°",
        "房型：スライムのコクーン〈和〉",
        "約60㎡",
        "日式現代 × Dragon Quest",
        "私人露台",
        "檜木風呂",
        "夕朝食付"
      ],
      map: mapSearch("GRAND CHARIOT 北斗七星135°"),
      tags: ["住宿", "DQ", "主題房", "檜木風呂"],
      status: "confirmed"
    },
    {
      time: "16:00",
      title: "スライムのコクーン〈和〉",
      eyebrow: "房間也是冒險",
      summary: "把下午留在史萊姆房裡，尋找小小勳章、看限定備品，慢慢享受這晚真正的住宿體驗。",
      detail: "進房後不要急著休息，因為スライムのコクーン〈和〉本身就包含許多 Dragon Quest 元素。\n\n房內設有『ちいさなメダル』任務，找到3枚小小勳章後，可依住宿方案規則取得原創特典。房內亦包含原創浴衣、扇子、Message Card、水果盤等住宿限定內容。\n\nMinibar 內飲品亦包含在住宿體驗中，可以慢慢享用。這段時間不排任何外部行程，避免花了高價住聯名房卻沒有真正享受到房間。",
      highlights: [
        "房內小小勳章任務",
        "尋找3枚ちいさなメダル",
        "原創浴衣",
        "原創扇子",
        "Message Card",
        "原創水果盤",
        "Minibar 飲品",
        "留時間拍房間與限定細節"
      ],
      map: mapSearch("GRAND CHARIOT 北斗七星135°"),
      tags: ["主題房", "限定特典", "DQ", "住宿體驗"],
      status: "confirmed"
    },
    {
      time: "18:00",
      title: "GRAND CHARIOT 晚餐",
      eyebrow: "旅宿晚餐",
      summary: "今晚不再外出找餐廳，把晚餐也留在 GRAND CHARIOT 的住宿體驗裡。",
      detail: "住宿方案已包含晚餐。實際用餐時間依住宿當日安排與 Check-in 時確認的時段為準。\n\n白天已經在 DQ Island 活動數小時，因此晚上不再安排需要趕時間的外部景點。吃完晚餐後可依體力決定是否參加住宿附贈的期間限定夜間活動。",
      highlights: [
        "住宿方案包含晚餐",
        "實際用餐時段 Check-in 時確認",
        "晚餐後不安排開車",
        "保留夜間活動與房內休息彈性"
      ],
      map: mapSearch("GRAND CHARIOT 北斗七星135°"),
      tags: ["晚餐", "住宿", "休息"],
      status: "confirmed"
    },
    {
      time: "晚上",
      title: "期間限定夜間活動・或留在史萊姆房",
      eyebrow: "夜間彈性",
      summary: "住宿特典若仍包含夜間活動，可依當期內容與體力決定參加；不為免費票券硬塞行程。",
      detail: "目前住宿方案頁面顯示包含二次元之森期間限定夜間活動票券，但官方亦註明活動內容可能變更，因此 2026 年 11 月實際內容需在出發前再次確認。\n\n如果當期活動很有興趣，可以晚餐後參加；如果白天 DQ Island 已經玩得很充分，則直接留在スライムのコクーン〈和〉泡檜木風呂、喝飲料、整理照片，也是更值得的選擇。",
      highlights: [
        "夜間活動屬住宿附贈特典",
        "2026/11實際活動內容待確認",
        "是否參加依興趣與體力決定",
        "不因為免費附票而硬塞",
        "留時間享受檜木風呂與房間"
      ],
      note: "出發前再次確認 GRAND CHARIOT 當期住宿特典與夜間活動內容。",
      map: mapSearch("ニジゲンノモリ"),
      tags: ["夜間活動", "彈性", "住宿"],
      status: "flex"
    }
  ]
},
  {
  date: "11/25",
  weekday: "三",
  place: "淡路島・丸龜・高松",
  title: "離開勇者之島，沿著國生神話回到讚岐",
  lodging: "Dormy Inn 高松中央公園前",
  lodgingMap: mapSearch("ドーミーイン高松中央公園前"),
  lodgingNote: "11/25、11/26 連住兩晚｜含早餐",
  stops: [
    {
      time: "08:00",
      title: "GRAND CHARIOT・早餐",
      eyebrow: "史萊姆之晨",
      summary: "慢慢吃早餐，把史萊姆房最後的清晨留給自己。",
      detail: "今天雖然要離開淡路島，但不需要一早匆忙退房。先在 GRAND CHARIOT 吃早餐，再回房整理行李、補拍スライムのコクーン〈和〉細節。\n\n今天下午要把丸龜城當成主景，因此早上會比原本稍微提早離開 GRAND CHARIOT，讓午後行程更從容。",
      highlights: [
        "做個抉擇，丸龜城還去不去，不去的話整體行程可以悠哉一點",
        "住宿包含早餐",
        "早餐後回房整理行李"
      ],
      map: mapSearch("GRAND CHARIOT 北斗七星135°"),
      tags: ["早餐", "DQ", "住宿"],
      status: "confirmed"
    },
    {
      time: "09:45",
      title: "GRAND CHARIOT Check-out",
      eyebrow: "離開勇者之島",
      summary: "結束 Dragon Quest 主題住宿，取車後往淡路島中部前進。",
      detail: "今天不住到退房最後一刻，目標約09:45～10:00完成退房並返回停車區取車。",
      highlights: [
        "目標約09:45～10:00離開",
        "返回停車區取車"
      ],
      map: mapSearch("ニジゲンノモリ F駐車場"),
      tags: ["退房", "取車", "移動"],
      status: "confirmed"
    },
    {
      time: "10:35",
      title: "伊弉諾神宮",
      eyebrow: "國生神話與夫婦之神",
      summary: "在離開淡路島以前，走完這趟旅行的國生神話線。",
      detail: "伊弉諾神宮祭祀伊弉諾尊與伊弉冉尊——《古事記》國生神話中創造日本列島的夫妻神。傳說兩神首先誕生的島嶼便是淡路島，因此淡路島也有「國生之島」與「夫婦的故鄉」之稱。\n\n伊弉諾神宮被視為與《古事記》、《日本書紀》創世神話淵源極深的古社。境內也能看到象徵男女和合的「鶺鴒（せきれい）」意象；自古鶺鴒被奉為夫妻圓滿的神鳥，因此境內設有「せきれいの里」。\n\n走主要參道、拜殿與夫婦大楠即可，不需要把境內每一處都走完。重點是替淡路島的神話主題收尾。",
      highlights: [
        "淡路國一宮",
        "祭祀伊弉諾尊・伊弉冉尊",
        "與自凝島神社形成國生神話線",
        "夫婦大楠",
        "停留約60~70分鐘"
      ],
      map: "https://maps.app.goo.gl/vGMi8WGdmkTekxZ68",
      tags: ["神社", "神話", "歷史"],
      status: "confirmed"
    },
    {
      time: "11:40",
      title: "淡路島・午餐",
      eyebrow: "離島前最後一餐",
      summary: "簡單吃一頓淡路島料理。",
      detail: "可以在伊弉諾神宮周邊簡單吃淡路牛、海鮮、洋蔥料理，也可以改成途中休息站解決。\n\n今天午餐的重點是順路、快速、停車方便。目標約11:50左右重新上路。",
      highlights: [
        "用餐約30分鐘",
        "淡路牛／海鮮／洋蔥料理皆可"
      ],
      restaurants: [
          {
            name: "★ 章魚仙貝之里 たこせんべいの里",
            map: "https://maps.app.goo.gl/dSpG9YEdn6PuQNRh9",
            note: "採買仙貝蝦餅"
          },
        {
            name: "➀ Soratoumi 淡路島台所五感ダイニングそらと海",
            map: "https://maps.app.goo.gl/USrmBCb2X2Pz5g3D8",
            note: "從神宮離開後順路5分鐘車程。有淡路牛、洋蔥漢堡排"
          },
          {
            name: "➁ Kitora Sumoto 海鮮料理 きとら 洲本店",
            map: "https://maps.app.goo.gl/qgyJzbVE1W5b2kHr5",
            note: "從神宮離開後順路20分鐘車程。看起來也有淡路牛、海鮮刺身套餐"
          },
          {
  name: "➂ 淡路島漢堡 淡路島Onion Kitchen",
  maps: [
    "https://maps.app.goo.gl/SDXXiBgz9bAop31G7",
    "https://maps.app.goo.gl/71d9iy6MkyqNrmGe7"
  ],
  note: "渦之丘店／渦町Terrace店，兩家分店分別位於鳴門大橋前與途中。"
}
        ],
      map: mapSearch("伊弉諾神宮 ランチ"),
      tags: ["午餐", "淡路島", "地方料理"],
      status: "flex"
    },
    {
      time: "午餐後出發",
      title: "淡路島出發・往丸龜",
      eyebrow: "返回四國",
      summary: "經大鳴門橋返回四國，直接往丸龜前進。",
      detail: "午餐後出發，目標是下午約14:00抵達丸龜，因此中途以必要休息為主，不安排額外景點。",
      highlights: [
        "經大鳴門橋返回四國",
        "直接往丸龜",
        "目標14:00左右抵達"
      ],
      map: "https://maps.app.goo.gl/NvEMnTDz9DXyHWUe9",
      tags: ["自駕", "移動", "鳴門", "香川"],
      status: "flex"
    },
    {
      time: "14:00",
      title: "丸龜城",
      eyebrow: "今日主景",
      summary: "從高石垣一路登上現存天守，把午後完整留給讚岐城郭。",
      detail: "丸龜城築於標高約66公尺的龜山之上，是一座平山城，又稱「龜山城」。城郭由本丸、二之丸、三之丸、帶曲輪與山下曲輪等構成，擁有約400年的歷史，並被選為日本100名城。\n\n丸龜城最具代表性的並不只是天守，而是從山腳層層堆疊至本丸的壯麗石垣，因此也有「石之城」之稱。沿著大手門進城，經過坡度陡峭的見返り坂向上走，可以近距離觀察石垣優美的曲線與不同高度的城郭結構。\n\n山頂的丸龜城天守則是日本現存十二天守之一。天守本身規模不大，但與高石垣、龜山地形以及城下町景觀結合後，才構成丸龜城真正的魅力。今天不以快速登上天守為目標，而是把時間留給石垣、城門、坡道與午後光影。",
      nearby: [
        {
          name: "➀ 大手一の門・大手二の門",
          note: "從城下進入丸龜城的主要入口，適合從這裡開始完整感受城郭。",
          map: "https://maps.app.goo.gl/9Fsr89nXcbK6bMsL6"
        },
        {
          name: "➁ 見返り坂",
          note: "前往本丸的重要坡道。坡度明顯，但沿途能看到丸龜城最具代表性的高石垣。"
        },
        {
          name: "➂ 丸龜城天守",
          note: "現存十二天守之一。規模不大，但木造空間與城下視野非常有歷史感。"
        }
      ],
      highlights: [
        "現存十二天守之一",
        "高石垣是丸龜城真正重點",
        "見返り坂坡度較陡",
        "官方目前天守09:00～16:30",
        "建議停留約1.5～2小時"
      ],
      note: "若當年秋季有丸亀キャッスルロード夜間點燈，可出發前再確認是否值得延後離開。",
      map: "https://maps.app.goo.gl/9wM7Wsqs6uhiZVB17",
      tags: ["城郭", "歷史", "石垣", "攝影"],
      status: "flex"
    },
    {
      time: "16:15",
      title: "丸龜出發・往高松",
      eyebrow: "最後一段自駕",
      summary: "離開丸龜城後往高松市區，準備加油與還車。",
      detail: "丸龜城結束後不再增加景點，直接往高松市區移動。\n\n今晚還要完成加油、還車與飯店入住，因此即使丸龜城很好拍，也建議約16:15～16:30開始下山離開。",
      highlights: [
        "丸龜城後不再追加景點",
        "約16:15～16:30離開",
        "直接往高松",
        "預留還車緩衝"
      ],
      map: mapSearch("丸亀城 高松"),
      tags: ["移動", "高松", "自駕"],
      status: "flex"
    },
    {
      time: "17:30",
      title: "高松市區・加油與還車",
      eyebrow: "自駕終點",
      summary: "把油加滿、確認車內物品，正式結束這趟四國自駕。",
      detail: "進入高松後先依租車規定加滿油，再前往最終確認的 TOYOTA Rent a Car 市區門市還車。\n\n目前高松店是很適合的候選，位置在JR高松站南側約2分鐘，官方目前營業時間為08:00～20:00，並接受異地還車。實際仍以你的租車預約修改結果為準。\n\n還車後，11/25晚上、11/26全天與11/27前往機場都不再開車。",
      highlights: [
        "先加滿油再還車",
        "檢查 ETC、車內與後車廂",
        "高松店目前營業至20:00",
        "可接受異地還車",
        "最終門市待預約修改後確認"
      ],
      note: "待補：TOYOTA Rent a Car 最終還車門市、預約編號與實際還車時間。",
      map: mapSearch("トヨタレンタカー 高松店"),
      tags: ["加油", "還車", "租車", "高松"],
      status: "flex"
    },
    {
      time: "18:30",
      title: "入住 Dormy Inn 高松中央公園前",
      eyebrow: "高松連住兩晚",
      summary: "結束自駕後正式進入最後的高松慢遊時光。",
      detail: "11/25、11/26連住「Dormy Inn 高松中央公園前／ドーミーイン高松中央公園前」，而且住宿方案包含早餐。\n\n還車後就不用再考慮停車與駕駛，接下來兩天以步行、琴電與公車移動。入住後可以先泡大浴場，再出去吃晚餐。",
      highlights: [
        "11/25、11/26連住兩晚",
        "住宿包含早餐",
        "還車後不再開車",
        "可先利用飯店大浴場",
        "隔日為完整高松日"
      ],
      map: mapSearch("ドーミーイン高松中央公園前"),
      tags: ["住宿", "高松", "連住"],
      status: "confirmed"
    },
    {
      time: "晚上",
      title: "高松商店街・晚餐",
      eyebrow: "城市散步",
      summary: "不再安排正式景點，只在丸龜町、瓦町一帶散步吃飯。",
      detail: "今天已經完成淡路島、丸龜城、長距離駕駛與還車，所以晚上不安排栗林公園或玉藻公園。\n\n從飯店步行到丸龜町、瓦町一帶找晚餐即可。骨付鳥可以列為第一順位，也可以依當晚狀態選居酒屋或瀨戶內海鮮。",
      restaurants: [
          {
            name: "➀ 骨付鳥 一鶴 高松店",
            map: "https://maps.app.goo.gl/d9qKMsAbEC5FRep88",
            note: "2025百名店，好像會大排長龍"
          },
          {
            name: "➁ 骨付鳥 蘭丸 本店",
            map: "https://maps.app.goo.gl/XRafs4W4sPdDGtKW8",
            note: "2025百名店"
          },
          {
            name: "➂ 骨付鳥一本がぶ丸 本店",
            map: "https://maps.app.goo.gl/tFRtwb2Z8tYv6hDAA",
            note: "GoogleMaps上很高分"
          }
        ],
      highlights: [
        "步行活動",
        "丸龜町・瓦町一帶",
        "骨付鳥可列晚餐首選",
        "不安排正式景點",
        "留體力給11/26完整高松日"
      ],
      map: mapSearch("高松丸亀町商店街"),
      tags: ["晚餐", "商店街", "散步"],
      status: "flex"
    }
  ]
},
  {
  date: "11/26",
  weekday: "四",
  place: "高松",
  title: "屋島望海，在讚岐庭園收下秋光",
  lodging: "Dormy Inn 高松中央公園前",
  lodgingMap: mapSearch("ドーミーイン高松中央公園前"),
  lodgingNote: "11/25、11/26 連住兩晚｜含早餐",
  stops: [
    {
      time: "07:30",
      title: "Dormy Inn・早餐",
      eyebrow: "高松清晨",
      summary: "不必再找早餐店，從飯店早餐開始最後一個完整旅行日。",
      detail: "今天沒有自駕行程，早上直接在 Dormy Inn 高松中央公園前吃早餐。\n\n吃完後從飯店步行前往瓦町一帶，轉乘琴電或巴士前往屋島。今天的節奏以大眾交通與步行為主，不需要再處理停車或還車。",
      highlights: [
        "住宿方案包含早餐",
        "不用另外找早餐店",
        "今天全程以大眾交通＋步行為主",
        "早上不必處理車輛"
      ],
      map: mapSearch("ドーミーイン高松中央公園前"),
      tags: ["早餐", "住宿", "高松"],
      status: "confirmed"
    },
    {
      time: "09:00",
      title: "屋島寺・獅子之靈巖",
      eyebrow: "瀨戶內展望",
      summary: "從古寺、源平故事與山上海景之間，看高松最後一個完整上午。",
      detail: "屋島是今天上午的主景。屋島寺是四國八十八箇所第84番札所，山上則可以從獅子之靈巖方向眺望高松市區與瀨戶內海。\n\n這次不只是到展望台拍照，而是把屋島寺、山上步道與幾個主要展望位置一起慢慢走完。\n\n由於11/26是平日，前往屋島山上的大眾交通班次需在出發前再次確認。建議預留足夠轉乘時間，不把上午排得太緊。",
      nearby: [
        {
          name: "➀ 屋島寺",
          note: "四國八十八箇所第84番札所，位於屋島山上，是今天上午最重要的歷史文化停點。",
          map: mapSearch("屋島寺")
        },
        {
          name: "➁ 獅子の霊巌",
          note: "屋島代表性的瀨戶內海展望點，可眺望高松港、市區與海上島嶼。",
          map: mapSearch("獅子の霊巌 屋島")
        }
      ],
      highlights: [
        "屋島寺＋山上展望一起安排",
        "四國八十八箇所第84番札所",
        "瀨戶內海與高松市區視野",
        "建議停留約2～2.5小時",
        "平日交通班次出發前再次確認",
        "海風較強，準備保暖外套"
      ],
      note: "11/26為星期四，屋島山上交通方式與班次需在出發前依2026年正式時刻再次確認。",
      map: mapSearch("屋島寺 獅子の霊巌"),
      tags: ["寺院", "海景", "歷史", "攝影"],
      status: "confirmed"
    },
    {
      time: "12:00",
      title: "讚岐烏龍麵・午餐",
      eyebrow: "香川味道",
      summary: "從屋島下山後吃一碗烏龍麵，餐廳依實際交通動線決定。",
      detail: "今天中午保留給讚岐烏龍麵，但不先綁死單一店家。\n\n如果屋島下山交通順利，可挑屋島或瓦町方向的店；若轉乘時間較長，就選回高松市中心途中方便的店家。\n\n重點是不為了名店大幅繞路或排隊太久，因為下午要完整留給栗林公園。",
      highlights: [
        "讚岐烏龍麵為午餐主題",
        "依屋島下山動線選店",
        "不為名店大幅繞路",
        "避免長時間排隊",
        "13:00左右往栗林公園移動"
      ],
      map: mapSearch("讃岐うどん 高松 瓦町"),
      tags: ["午餐", "烏龍麵", "高松"],
      status: "flex"
    },
    {
      time: "13:30",
      title: "栗林公園",
      eyebrow: "今日主景",
      summary: "把整個午後交給南湖、掬月亭與飛來峰，慢慢看晚秋庭園的光影。",
      detail: "栗林公園是今天最重要的一站，也是高松最後一天最值得留完整時間的景點。\n\n不追求把所有角落走完，而是以南庭為主軸，從東門進入後慢慢走過池泉、松景、掬月亭、偃月橋與飛來峰。\n\n下午斜光會讓松樹、池水與紅葉層次特別漂亮，因此今天至少預留2.5～3小時。\n\n如果2026年秋季夜間點燈期間剛好涵蓋11/26，可以視當年公告決定是否延長停留，不需要急著趕往下一站。",
      nearby: [
        {
          name: "➀ 掬月亭",
          note: "栗林公園南庭的重要建築之一，靠近南湖，建築與水景很適合慢慢看。",
          map: mapSearch("栗林公園 掬月亭")
        },
        {
          name: "➁ 偃月橋",
          note: "跨越南湖的代表性橋景，周圍松景與池水層次很漂亮。",
          map: mapSearch("栗林公園 偃月橋")
        },
        {
          name: "➂ 飛來峰",
          note: "栗林公園經典俯瞰位置，可望南湖、偃月橋與庭園景觀，是今天最重要的攝影點之一。",
          map: mapSearch("栗林公園 飛来峰")
        }
      ],
      highlights: [
        "今日最重要的午後主景",
        "以南庭為主要步行範圍",
        "掬月亭・偃月橋・飛來峰",
        "建議停留約2.5～3小時",
        "下午斜光適合攝影",
        "2026秋季夜間點燈待當年度公告"
      ],
      note: "若2026年栗林公園秋季夜間點燈涵蓋11/26，可考慮直接留到入夜，不必趕下一站。",
      map: mapSearch("栗林公園"),
      tags: ["庭園", "紅葉", "攝影", "高松"],
      status: "confirmed"
    },
    {
      time: "16:45",
      title: "玉藻公園・高松港",
      eyebrow: "旅程夕景",
      summary: "若栗林公園沒有留到夜間，就到高松城跡與港邊看最後一段瀨戶內暮色。",
      detail: "這一站保留彈性。\n\n如果栗林公園大約16:00左右結束，而且當天沒有夜間點燈，就可以前往玉藻公園與高松港散步。\n\n玉藻公園是高松城跡所在地，和海非常接近；之後再走到高松港，看港灣、渡輪與傍晚藍調時間。\n\n如果栗林公園走得很滿足、或夜間點燈值得留下，就直接取消這張卡，不需要為了多一個景點趕路。",
      nearby: [
        {
          name: "➀ 玉藻公園",
          note: "高松城跡所在地，石垣、櫓與海水護城河是主要看點。",
          map: mapSearch("玉藻公園")
        },
        {
          name: "➁ 高松港",
          note: "適合看瀨戶內海港灣與傍晚藍調時間，也能感受高松作為港町的氣氛。",
          map: mapSearch("高松港")
        }
      ],
      highlights: [
        "栗林公園結束較早才安排",
        "玉藻公園＋高松港合併散步",
        "以夕景與港町氣氛為主",
        "若栗林夜間點燈則直接取消",
        "不為完成清單而趕"
      ],
      map: mapSearch("玉藻公園 高松港"),
      tags: ["城跡", "港口", "夕景", "散步"],
      status: "flex"
    },
    {
      time: "晚上",
      title: "高松・最後一晚",
      eyebrow: "Dormy Inn 第二晚",
      summary: "回到同一間飯店，吃一頓喜歡的晚餐，再慢慢整理回程行李。",
      detail: "今晚是 Dormy Inn 高松中央公園前第二晚，也是整趟旅程最後一晚。\n\n如果前一晚已吃骨付鳥，今晚可以改吃瀨戶內海鮮、居酒屋或其他高松料理；如果還沒吃到骨付鳥，今天就是最後機會。\n\n回飯店後整理行李、確認隔天前往高松機場的交通與時間。11/27已經不再安排大型景點。",
      highlights: [
        "Dormy Inn 第二晚",
        "住宿包含隔日早餐",
        "晚餐不綁死單一餐廳",
        "整理行李與伴手禮",
        "確認11/27前往高松機場方式",
        "隔日13:20 JX301回台中"
      ],
      map: mapSearch("ドーミーイン高松中央公園前"),
      tags: ["住宿", "晚餐", "整理行李"],
      status: "confirmed"
    }
  ]
},{
  date: "11/27",
  weekday: "五",
  place: "高松・返程",
  title: "最後一個讚岐清晨，向四國道別",
  lodging: "今日返台・無住宿",
  lodgingMap: mapSearch("高松機場"),
  lodgingNote: "JX301｜高松 13:20 → 台中 15:40",
  stops: [
    {
      time: "07:30",
      title: "Dormy Inn・最後的早餐",
      eyebrow: "高松清晨",
      summary: "在高松最後一個早晨慢慢吃早餐，不再另外尋找早餐店。",
      detail: "今天是旅程最後一天。住宿方案已包含早餐，所以直接在 Dormy Inn 高松中央公園前用餐即可。\n\n今天沒有自駕，也沒有必須完成的大型景點。早餐後先回房整理行李，讓返程日保持輕鬆。",
      highlights: [
        "住宿方案包含早餐",
        "不另外安排早餐店",
        "早餐後整理最後行李",
        "今天不安排大型景點"
      ],
      map: mapSearch("ドーミーイン高松中央公園前"),
      tags: ["早餐", "住宿", "返程"],
      status: "confirmed"
    },

    {
      time: "08:30",
      title: "高松最後散步",
      eyebrow: "清晨彈性",
      summary: "如果行李已經整理好，就在中央公園或商店街附近走最後一小段。",
      detail: "這段完全屬於彈性時間。\n\n如果前一晚已經整理好行李，可以在飯店附近的高松中央公園、瓦町或商店街散步，買最後一些伴手禮。\n\n如果前一天沒有走到高松港，而且當天精神很好，也可以搭車往港邊短暫停留；但不建議為了補景點大幅拉長移動距離。\n\n今天所有活動都以準時返回飯店取行李、前往高松機場為第一優先。",
      highlights: [
        "中央公園／商店街為第一順位",
        "只安排短程散步",
        "可補買最後的伴手禮",
        "高松港僅在前一天未去且時間充裕時考慮",
        "不安排栗林公園、屋島等大型景點"
      ],
      note: "如果當天想睡晚一點或行李尚未整理完成，這張卡可以直接取消。",
      map: mapSearch("高松中央公園"),
      tags: ["散步", "購物", "彈性"],
      status: "flex"
    },

    {
      time: "09:45",
      title: "Dormy Inn Check-out・取行李",
      eyebrow: "離開高松",
      summary: "回飯店取行李、完成退房，正式準備前往高松機場。",
      detail: "最後確認護照、錢包、手機、充電器、退稅商品與伴手禮，再辦理 Check-out。\n\n租車已經在11/25於高松市區歸還，所以今天完全不需要處理加油、還車或接駁車，直接搭乘機場巴士前往高松機場即可。",
      highlights: [
        "確認護照與重要物品",
        "檢查房內插座與保險箱",
        "取齊所有行李",
        "今天不需處理租車",
        "退房後直接前往機場"
      ],
      map: mapSearch("ドーミーイン高松中央公園前"),
      tags: ["退房", "行李", "返程"],
      status: "confirmed"
    },

    {
      time: "10:15",
      title: "高松機場 Limousine Bus",
      eyebrow: "前往機場",
      summary: "從高松市區搭機場巴士前往高松機場，為國際線預留充足時間。",
      detail: "從 Dormy Inn 高松中央公園前附近前往機場，優先使用高松空港 Limousine Bus。\n\n實際上車站、班次與2026年11月27日正式時刻表，需要在出發前再次確認。今天不追求壓縮時間，目標約11:00～11:15抵達高松機場。",
      highlights: [
        "以機場巴士為主要交通方式",
        "2026/11/27正式班次出發前確認",
        "目標11:00～11:15抵達機場",
        "預留國際線報到與出境時間",
        "不要搭最後一班可銜接航班的巴士"
      ],
      note: "待2026年秋季機場巴士時刻表公布後，補上實際上車站與班次。",
      map: mapSearch("県庁通り中央公園前 高松空港リムジンバス"),
      tags: ["機場巴士", "交通", "高松機場"],
      status: "flex"
    },

    {
      time: "11:10",
      title: "高松機場・Check-in",
      eyebrow: "返程",
      summary: "辦理星宇航空報到與托運，最後在高松機場買些伴手禮。",
      detail: "抵達高松機場後先前往國際線辦理報到與托運行李，再依流程完成安檢與出境。\n\n如果時間充裕，可以在機場完成最後一輪伴手禮採買，但不需要為了購物壓縮登機時間。",
      highlights: [
        "星宇航空 JX301",
        "先完成報到與行李托運",
        "辦理安檢與出境",
        "最後補買香川伴手禮",
        "提早到登機口等待"
      ],
      map: mapSearch("高松機場"),
      tags: ["機場", "Check-in", "伴手禮"],
      status: "confirmed"
    },

    {
      time: "13:20",
      title: "JX301・高松 → 台中",
      eyebrow: "回台灣",
      summary: "從瀨戶內海起飛，結束這趟十二夜的四國秋日自駕旅程。",
      detail: "搭乘星宇航空 JX301，預計13:20由高松機場起飛，15:40抵達台中國際機場。\n\n從11/15抵達高松開始，走過琴平、祖谷、高知、室戶、德島、鳴門、淡路島，再由丸龜回到高松。最後不再塞景點，就讓旅程在高松機場安靜收尾。",
      highlights: [
        "JX301",
        "高松 13:20 出發",
        "台中 15:40 抵達",
        "國際線航班",
        "實際航班狀態出發前再次確認"
      ],
      note: "航班時間依目前機票資訊；出發前再次確認星宇航空最新航班狀態。",
      map: mapSearch("高松機場"),
      tags: ["飛機", "返台", "旅程終點"],
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
  if (!url) return "";

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
  document.querySelector("#detail-text").textContent =
  stop.detail || stop.summary || "";
  const detailMap = document.querySelector("#detail-map");

if (stop.map) {
  detailMap.href = stop.map;
  detailMap.hidden = false;
} else {
  detailMap.removeAttribute("href");
  detailMap.hidden = true;
}
  document.querySelector("#detail-tags").innerHTML =
  (stop.tags || []).map(tag => `<span>${tag}</span>`).join("");
  document.querySelector("#detail-highlights").innerHTML =
  (stop.highlights || []).map(item => `<li>${item}</li>`).join("");
  
const nearbyBlock = document.querySelector("#detail-nearby");
const nearbyList = document.querySelector("#nearby-list");

if (stop.nearby) {
  nearbyBlock.hidden = false;
  nearbyList.innerHTML = stop.nearby.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
<p>${item.note || ""}</p>
${
  item.image
    ? `<a href="${item.image}" target="_blank">查看圖片</a>`
    : ""
}
      ${
  item.image
    ? ""
    : item.maps
      ? item.maps.map((url, index) =>
          `<a href="${url}" target="_blank">地圖連結 ${index + 1}</a>`
        ).join("　")
      : item.map
        ? `<a href="${item.map}" target="_blank">地圖連結</a>`
        : ""
}
    </article>
  `).join("");
} else {
  nearbyBlock.hidden = true;
  nearbyList.innerHTML = "";
}

  const restaurantBlock = document.querySelector("#detail-restaurants");
const restaurantList = document.querySelector("#restaurant-list");

if (stop.restaurants) {
  restaurantBlock.hidden = false;

  restaurantList.innerHTML = stop.restaurants.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
      <p>${item.note || ""}</p>

      ${
  item.maps
    ? item.maps.map((url, index) =>
        `<a href="${url}" target="_blank">地圖連結 ${index + 1}</a>`
      ).join("　")
    : item.map
      ? `<a href="${item.map}" target="_blank">地圖連結</a>`
      : ""
}
    </article>
  `).join("");
} else {
  restaurantBlock.hidden = true;
  restaurantList.innerHTML = "";
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

  days
  .filter(day => day.lodging !== "今日返台・無住宿")
  .forEach(day => {
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
