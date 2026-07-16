// u can use _dearName variable, by using `` instead of ""
// like `hey ${_dearName}`

// for memory page image gallery, put images in /public/memories 
// and list file names in index.json in /public/memories/index.json

// u can put emojis in any text, except the _ConfessFinalText

// !!!!-- REPLACE THIS WITH UR REPO FIRST --!!!
export const _REPO = "confession"

export const _name = "Dear TRISHA";   // tab/site name

export const _dearName = "Trisha";  // name of the person u wanna gift to

export const _bgEmoji = "🌸";   // shown as animated bg

export const _themeColor = "#b06080" // use a lighter color, cz the colors are generated dimmed

export const _HeroTitle = "Hey You.."
export const _HeroPara = "There's something I've been meaning to show you. Something that lives in my chest every single day."


export const _MemoryGallerySpeed = 0.95
export const _MemoryMessages = [
  {
    title: `${_dearName}`,
    content:
      "I remember the exact moment I knew — not a grand gesture, just a quiet Tuesday, and you laughed at something small. And that was it. That was the beginning of everything.",
  },
  {
    title: "The Little Things",
    content:
      "The way you tell about things or just yapping I just can't express that feeling. The specific hum you do when you're thinking. I've catalogued all of it without even trying.",
  },
  {
    title: "When I Was at my lowest",
    content:
      " You were with me while dealing with your own problems and i don't know you realised or not that you didn't just make me feel better you gave me the reason to come out of the darkest place I'd been in.",
  },
  {
    title: "Every Ordinary Day",
    content:
      "Nothing special happened. We just existed in the same space. And somehow, those are the days I replay the most.",
  },
  {
    title: "What I Never Said",
    content:
      "I wanted to say it a hundred times but the moment always felt too small or too big. So I saved it. For here. For now.",
  },
  {
    title: "Something Ridiculous",
    content:
      "That one time we laughed so hard neither of us could speak. The icecream protest . I just remember your warning not to eat that and your iconic emoji .",
  },
  {
    title: "Right Now",
    content:
      "You're reading this, and somehow that feels like the bravest thing I've ever done — handing you something real and watching you open it.",
  },
]

export const _ConfessRevealText = "So, will you...";  // the first text
export const _ConfessFinalText = "be mine ?";  // the second text
export const _ConfessEmoji = "🥹"
export const _ConfessButtons = [
  { id: "btn_yes",   text: "Yes, always 💕",  clickable: true,  url: "/yes"   }, // dont change the url, unless u know what u are doing
  { id: "btn_no",    text: "No way",           clickable: false, url: ""       },
  { id: "btn_maybe", text: "Maybe... 👀",      clickable: false, url: ""       },
];



// u can put emojis in these 2
export const _FinalText = "I knew It !! 😭"
export const _FinalCompliment = "It's the happiest i have ever been !! ❤️‍🩹"
export const _FinalGif = "cute" // [flower, bear, cute, crackers]
// the gifs are in /public
