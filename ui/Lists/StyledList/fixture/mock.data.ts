import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
export const DATA: Array<Notification> = [
  {
    type: "notification",
    id: "1",
    title: "テキストアイテム",
    stamp: "🌟",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "text",
  },
  {
    type: "notification",
    id: "2",
    title: "最終日ダイアログ",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 10,
    isLastDay: true,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "sender-dialog",
  },
  {
    type: "notification",
    id: "3",
    title: "ダイアログアイテム",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    isLastDay: false,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "sender-dialog",
  },
  {
    type: "notification",
    id: "4",
    title: "ダイアログアイテム",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    isLastDay: false,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "sender-dialog",
  },
  {
    type: "notification",
    id: "5",
    title: "ダイアログアイテム",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    isLastDay: false,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "sender-dialog",
  },
  {
    type: "notification",
    id: "6",
    title: "スタンプが届いています",
    message: "今日もよくがんばりました！今日もよくがんばりました！",
    stamp: "❤️‍🔥",
    currentDay: 1,
    isLastDay: false,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "receiver-dialog",
  },
  {
    type: "notification",
    id: "7",
    title: "完走レターが届いています",
    message:
      "完走レターの内容完走レターの内容完走レターの内容完走レターの内容完走レターの内容",
    stamp: "❤️‍🔥",
    currentDay: 10,
    isLastDay: true,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "receiver-dialog",
  },
];

export const DATA_LETTER: Array<Letter> = [
  {
    type: "letter",
    id: "1",
    title: "「ピアノの練習をする」への完走レター",
    stamp: "🎹",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "2",
    title: "「A11yを勉強する期間」への完走レター",
    message:
      "さいごまで継続してほんと偉い！\n私も達成したいことを諦めずに頑張ろうって思えました。\nありがとう。",
    stamp: "❤️‍🔥",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "Stampy",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "saku",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "3",
    title: "「外食しない」への完走レター",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "🍜",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "4",
    title: "「お風呂掃除をする」への完走レター",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "🛁",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "5",
    title: "「本を読む」への完走レター",
    message:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "📚",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
];
