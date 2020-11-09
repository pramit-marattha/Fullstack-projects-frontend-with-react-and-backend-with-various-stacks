import React from 'react';
import {useState,useEffect} from "react";
import './App.css';
import Player from "./components/Player";


function App() {
  const [songs] = useState([
    {
        "title": "$orries",
        "artist": "Peachy!",
        "album": " Shiloh",
        "track": "$orries",
        "year": "1",
        "img_src": "./songs_images/$orries_Cover (front)_e.jpg",
        "src": "./songs/$orries.mp3"
    },
    {
        "title": "[oops]",
        "artist": "potsu",
        "album": "[oops]",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/[oops]_Cover (front)_e.jpg",
        "src": "./songs/[oops].mp3"
    },
    {
        "title": "5:32pm",
        "artist": "The Deli",
        "album": "Vibes 2",
        "track": "12",
        "year": "",
        "img_src": "./songs_images/5 32pm_Cover (front)_e.jpg",
        "src": "./songs/5 32pm.mp3"
    },
    {
        "title": "88 Keys",
        "artist": "Oatmello",
        "album": "Snapshots",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/88 Keys_Cover (front)_e.jpg",
        "src": "./songs/88 Keys.mp3"
    },
    {
        "title": "Affection",
        "artist": "Jinsang",
        "album": "Life",
        "track": "15",
        "year": "",
        "img_src": "./songs_images/Affection_Cover (front)_e.jpg ",
        "src": "./songs/Affection.mp3"
    },
    {
        "title": "Again",
        "artist": "Wun Two",
        "album": "Penthouse",
        "track": "4",
        "year": "",
        "img_src": "./songs_images/Again_Cover (front)_e.jpg",
        "src": "./songs/Again.mp3"
    },
    {
        "title": "Alone and Lonely",
        "artist": "prxz",
        "album": " Shiloh Dynasty",
        "track": "Love Wounds",
        "year": "2",
        "img_src": "./songs_images/Alone and Lonely_Cover (front)_e.jpg",
        "src": "./songs/Alone and Lonely.mp3"
    },
    {
        "title": "Baby You're Worth It",
        "artist": "Kina",
        "album": "Baby You're Worth It",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Baby You're Worth It_Cover (front)_e.jpg",
        "src": "./songs/Baby You're Worth It.mp3"
    },
    {
        "title": "Backpack City",
        "artist": "Flovry",
        "album": " tender spring",
        "track": "Ages Ago",
        "year": "4",
        "img_src": "./songs_images/ ",
        "src": "./songs/Backpack City.mp3"
    },
    {
        "title": "Beauty",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "4",
        "year": "",
        "img_src": "./songs_images/Beauty_Cover (front)_e.jpg",
        "src": "./songs/Beauty.mp3"
    },
    {
        "title": "Better Than He Can",
        "artist": "Jennifer Flores",
        "album": " Shiloh Dynasty",
        "track": " LofiCentral",
        "year": "All My Love",
        "img_src": "./songs_images/Better Than He Can_Cover (front)_e.jpg",
        "src": "./songs/Better Than He Can.mp3"
    },
    {
        "title": "Break My Heart Again",
        "artist": "90degrees",
        "album": "Break My Heart Again",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Break My Heart Again_Cover (front)_e.jpg",
        "src": "./songs/Break My Heart Again.mp3"
    },
    {
        "title": "Brightness",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "15",
        "year": "",
        "img_src": "./songs_images/Brightness_Cover (front)_e.jpg",
        "src": "./songs/Brightness.mp3"
    },
    {
        "title": "Call me",
        "artist": "90sFlav",
        "album": "Collection",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Call me_Cover (front)_e.jpg",
        "src": "./songs/Call me.mp3"
    },
    {
        "title": "Can We Kiss Forever?",
        "artist": "Kina",
        "album": " Adriana Proenza",
        "track": "Can We Kiss Forever?",
        "year": "1",
        "img_src": "./songs_images/Can We Kiss Forever _Cover (front)_e.jpg",
        "src": "./songs/Can We Kiss Forever .mp3"
    },
    {
        "title": "Can't Love Myself",
        "artist": "Monty Datta",
        "album": " Mishaal",
        "track": "Can't Love Myself",
        "year": "1",
        "img_src": "./songs_images/Can't Love Myself_Cover (front)_e.jpg",
        "src": "./songs/Can't Love Myself.mp3"
    },
    {
        "title": "Can't Take My Eyes off You",
        "artist": "Craymer",
        "album": " AIIVAWN",
        "track": "Can't Take My Eyes off You",
        "year": "1",
        "img_src": "./songs_images/Can't Take My Eyes off You_Cover (front)_e.jpg",
        "src": "./songs/Can't Take My Eyes off You.mp3"
    },
    {
        "title": "Cigarettes and Sex",
        "artist": "prxz",
        "album": " Shiloh Dynasty",
        "track": "Love Wounds",
        "year": "1",
        "img_src": "./songs_images/Cigarettes and Sex_Cover (front)_e.jpg",
        "src": "./songs/Cigarettes and Sex.mp3"
    },
    {
        "title": "Coffee Breath",
        "artist": "eyeroze",
        "album": "Coffee Breath",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Coffee Breath_Cover (front)_e.jpg",
        "src": "./songs/Coffee Breath.mp3"
    },
    {
        "title": "controlla",
        "artist": "Idealism",
        "album": "rainy evening",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/controlla_Cover (front)_e.jpg",
        "src": "./songs/controlla.mp3"
    },
    {
        "title": "Cream",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "14",
        "year": "",
        "img_src": "./songs_images/Cream_Cover (front)_e.jpg",
        "src": "./songs/Cream.mp3"
    },
    {
        "title": "Day in Paris",
        "artist": "Llusion",
        "album": "Day in Paris",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Day in Paris_Cover (front)_e.jpg",
        "src": "./songs/Day in Paris.mp3"
    },
    {
        "title": "Daydreaming",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "8",
        "year": "",
        "img_src": "./songs_images/Daydreaming_Cover (front)_e.jpg",
        "src": "./songs/Daydreaming.mp3"
    },
    {
        "title": "Death Bed",
        "artist": "Fets",
        "album": " Koosen",
        "track": " Formal Chicken",
        "year": "Death Bed",
        "img_src": "./songs_images/Death Bed_Cover (front)_e.jpg",
        "src": "./songs/Death Bed.mp3"
    },
    {
        "title": "drift...",
        "artist": "junyii.",
        "album": " Chill Children",
        "track": "junyii・float",
        "year": "3",
        "img_src": "./songs_images/drift..._Cover (front)_e.jpg",
        "src": "./songs/drift....mp3"
    },
    {
        "title": "Evil Morty",
        "artist": "Weegie",
        "album": " Koosen",
        "track": " Poky",
        "year": "Evil Morty",
        "img_src": "./songs_images/Evil Morty_Cover (front)_e.jpg",
        "src": "./songs/Evil Morty.mp3"
    },
    {
        "title": "Feblu",
        "artist": "Flughand",
        "album": "EXPEDITion Vol. 7: Moonloops",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/Feblu_Cover (front)_e.jpg",
        "src": "./songs/Feblu.mp3"
    },
    {
        "title": "Fever Dream",
        "artist": "Ethan Rebel",
        "album": "Fever Dream",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Fever Dream_Cover (front)_e.jpg",
        "src": "./songs/Fever Dream.mp3"
    },
    {
        "title": "First Heartbreak",
        "artist": "Flovry",
        "album": " tender spring",
        "track": "Ages Ago",
        "year": "3",
        "img_src": "./songs_images/First Heartbreak_Cover (front)_e.jpg",
        "src": "./songs/First Heartbreak.mp3"
    },
    {
        "title": "French Inhale",
        "artist": "[bsd.u]",
        "album": "444",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/French Inhale_Cover (front)_e.jpg",
        "src": "./songs/French Inhale.mp3"
    },
    {
        "title": "Get You The Moon (feat. Snøw)",
        "artist": "Kina",
        "album": " Snøw",
        "track": "Get You The Moon (feat. Snøw)",
        "year": "1",
        "img_src": "./songs_images/Get You The Moon (feat. Snøw)_Cover (front)_e.jpg",
        "src": "./songs/Get You The Moon (feat. Snøw).mp3"
    },
    {
        "title": "Ghost Train Haze",
        "artist": "BluntOne",
        "album": "Forest Walk",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Ghost Train Haze_Cover (front)_e.jpg",
        "src": "./songs/Ghost Train Haze.mp3"
    },
    {
        "title": "Happiness",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "12",
        "year": "",
        "img_src": "./songs_images/Happiness_Cover (front)_e.jpg",
        "src": "./songs/Happiness.mp3"
    },
    {
        "title": "hold up",
        "artist": "eevee",
        "album": "beat tape 06",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/hold up_Cover (front)_e.jpg",
        "src": "./songs/hold up.mp3"
    },
    {
        "title": "I Can't Help",
        "artist": "Sarcastic Sounds",
        "album": "I Can't Help",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/I Can't Help_Cover (front)_e.jpg",
        "src": "./songs/I Can't Help.mp3"
    },
    {
        "title": "I Don't Sleep",
        "artist": "Sarcastic Sounds",
        "album": "I Don't Sleep",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/I Don't Sleep_Cover (front)_e.jpg",
        "src": "./songs/I Don't Sleep.mp3"
    },
    {
        "title": "I Don't Trust Nobody",
        "artist": "cucu",
        "album": " Shiloh",
        "track": "I Don't Trust Nobody",
        "year": "1",
        "img_src": "./songs_images/I Don't Trust Nobody_Cover (front)_e.jpg",
        "src": "./songs/I Don't Trust Nobody.mp3"
    },
    {
        "title": "I'll Bite Your Soul",
        "artist": "SHRK",
        "album": " Shiloh Dynasty",
        "track": "Lost in Love",
        "year": "3",
        "img_src": "./songs_images/I'll Bite Your Soul_Cover (front)_e.jpg",
        "src": "./songs/I'll Bite Your Soul.mp3"
    },
    {
        "title": "I'll Keep You Safe",
        "artist": "sagun",
        "album": "I'll Keep You Safe",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/I'll Keep You Safe_Cover (front)_e.jpg",
        "src": "./songs/I'll Keep You Safe.mp3"
    },
    {
        "title": "i'm closing my eyes (feat. shiloh)",
        "artist": "potsu",
        "album": "i'm closing my eyes (feat. shiloh)",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/i'm closing my eyes (feat. shiloh)_Cover (front)_e.jpg",
        "src": "./songs/i'm closing my eyes (feat. shiloh).mp3"
    },
    {
        "title": "I'm Drunk and Confused",
        "artist": "eyeroze",
        "album": " 90degrees",
        "track": "I'm Drunk and Confused",
        "year": "1",
        "img_src": "./songs_images/I'm Drunk and Confused_Cover (front)_e.jpg",
        "src": "./songs/I'm Drunk and Confused.mp3"
    },
    {
        "title": "I'm Shy. I'm Anxious",
        "artist": "prxz",
        "album": " Shiloh Dynasty",
        "track": "Love Wounds",
        "year": "3",
        "img_src": "./songs_images/I'm Shy. I'm Anxious_Cover (front)_e.jpg",
        "src": "./songs/I'm Shy. I'm Anxious.mp3"
    },
    {
        "title": "I'm Sorry",
        "artist": "Swell",
        "album": " Shiloh",
        "track": "Theres Still Us",
        "year": "3",
        "img_src": "./songs_images/I'm Sorry_Cover (front)_e.jpg",
        "src": "./songs/I'm Sorry.mp3"
    },
    {
        "title": "I'm Yours",
        "artist": "Koosen",
        "album": " Avocuddle",
        "track": " Fets",
        "year": "I'm Yours",
        "img_src": "./songs_images/I'm Yours_Cover (front)_e.jpg",
        "src": "./songs/I'm Yours.mp3"
    },
    {
        "title": "In My Eyes",
        "artist": "Beowülf",
        "album": "In My Eyes",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/In My Eyes_Cover (front)_e.jpg",
        "src": "./songs/In My Eyes.mp3"
    },
    {
        "title": "infinity",
        "artist": "Oatmello",
        "album": "infinity",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/infinity_Cover (front)_e.jpg",
        "src": "./songs/infinity.mp3"
    },
    {
        "title": "I've Changed for You",
        "artist": "Kina",
        "album": " Madson Project.",
        "track": "I've Changed for You",
        "year": "1",
        "img_src": "./songs_images/I've Changed for You_Cover (front)_e.jpg",
        "src": "./songs/I've Changed for You.mp3"
    },
    {
        "title": "Kiss",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/Kiss_Cover (front)_e.jpg",
        "src": "./songs/Kiss.mp3"
    },
    {
        "title": "Landing",
        "artist": "dryhope",
        "album": "White Oak",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/Landing_Cover (front)_e.jpg",
        "src": "./songs/Landing.mp3"
    },
    {
        "title": "Let Her Go",
        "artist": "Sea Flap Flap",
        "album": " Weegie",
        "track": " Formal Chicken",
        "year": "Let Her Go",
        "img_src": "./songs_images/Let Her Go_Cover (front)_e.jpg",
        "src": "./songs/Let Her Go.mp3"
    },
    {
        "title": "Long",
        "artist": "Shiloh Dynasty",
        "album": " LofiCentral",
        "track": " Stay Might",
        "year": "Remixes",
        "img_src": "./songs_images/Long_Cover (front)_e.jpg",
        "src": "./songs/Long.mp3"
    },
    {
        "title": "Loosing Interest",
        "artist": "Timmies",
        "album": "Passion & Confusion",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/Loosing Interest_Cover (front)_e.jpg",
        "src": "./songs/Loosing Interest.mp3"
    },
    {
        "title": "Losing Interest",
        "artist": "itssvd",
        "album": " Shiloh Dynasty",
        "track": "Missing",
        "year": "2",
        "img_src": "./songs_images/Losing .Interest_Cover (front)_e.jpg",
        "src": "./songs/Losing .Interest.mp3"
    },
    {
        "title": "Losing Interest",
        "artist": "itssvd",
        "album": " Shiloh Dynasty",
        "track": "Missing",
        "year": "2",
        "img_src": "./songs_images/Losing Interest(2)_Cover (front)_e.jpg",
        "src": "./songs/Losing Interest.mp3"
    },
    {
        "title": "Losing Interest",
        "artist": "Inownlove",
        "album": " Shiloh",
        "track": "Feel Blue",
        "year": "9",
        "img_src": "./songs_images/Losing Interest(2)_Cover (front)_e.jpg",
        "src": "./songs/Losing Interest(2).mp3"
    },
    {
        "title": "Love Again",
        "artist": "itssvd",
        "album": " Shiloh Dynasty",
        "track": "Missing",
        "year": "1",
        "img_src": "./songs_images/Love Again_Cover (front)_e.jpg",
        "src": "./songs/Love Again.mp3"
    },
    {
        "title": "Love Is More Depressing Than Depression",
        "artist": "prxz",
        "album": " Shiloh Dynasty",
        "track": "Love Wounds",
        "year": "7",
        "img_src": "./songs_images/Love Is More Depressing Than Depression_Cover (front)_e.jpg",
        "src": "./songs/Love Is More Depressing Than Depression.mp3"
    },
    {
        "title": "Medieval",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "9",
        "year": "",
        "img_src": "./songs_images/Medieval_Cover (front)_e.jpg",
        "src": "./songs/Medieval.mp3"
    },
    {
        "title": "Mirror Image",
        "artist": "ENRA",
        "album": " Sleepermane",
        "track": "Tomorrows That Follow",
        "year": "4",
        "img_src": "./songs_images/Mirror Image_Cover (front)_e.jpg",
        "src": "./songs/Mirror Image.mp3"
    },
    {
        "title": "Miss You",
        "artist": "Monty Datta",
        "album": " Shiloh Dynasty",
        "track": "Miss You",
        "year": "1",
        "img_src": "./songs_images/Miss You_Cover (front)_e.jpg",
        "src": "./songs/Miss You.mp3"
    },
    {
        "title": "Monday",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/Monday_Cover (front)_e.jpg",
        "src": "./songs/Monday.mp3"
    },
    {
        "title": "my new love",
        "artist": "Elijah Who",
        "album": "Gentle Boy",
        "track": "12",
        "year": "",
        "img_src": "./songs_images/my new love_Cover (front)_e.jpg",
        "src": "./songs/my new love.mp3"
    },
    {
        "title": "nagashi",
        "artist": "Idealism",
        "album": "rainy evening",
        "track": "5",
        "year": "",
        "img_src": "./songs_images/nagashi_Cover (front)_e.jpg",
        "src": "./songs/nagashi.mp3"
    },
    {
        "title": "Night Walk",
        "artist": "xander.",
        "album": "Found Memories",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Night Walk_Cover (front)_e.jpg",
        "src": "./songs/Night Walk.mp3"
    },
    {
        "title": "Nightfall",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "5",
        "year": "",
        "img_src": "./songs_images/Nightfall_Cover (front)_e.jpg",
        "src": "./songs/Nightfall.mp3"
    },
    {
        "title": "Nostalgia",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "7",
        "year": "",
        "img_src": "./songs_images/Nostalgia_Cover (front)_e.jpg",
        "src": "./songs/Nostalgia.mp3"
    },
    {
        "title": "Not Even Her (feat. Shiloh)",
        "artist": "Floreyyyy",
        "album": " Shiloh",
        "track": "Intimacy",
        "year": "8",
        "img_src": "./songs_images/Not Even Her (feat. Shiloh)_Cover (front)_e.jpg",
        "src": "./songs/Not Even Her (feat. Shiloh).mp3"
    },
    {
        "title": "Nova",
        "artist": "mell-ø",
        "album": "1 Am. Study Session",
        "track": "6",
        "year": "",
        "img_src": "./songs_images/Nova_Cover (front)_e.jpg",
        "src": "./songs/Nova.mp3"
    },
    {
        "title": "Oblivion",
        "artist": "Rufi-O",
        "album": " Lily Potter",
        "track": "Oblivion",
        "year": "1",
        "img_src": "./songs_images/Oblivion_Cover (front)_e.jpg",
        "src": "./songs/Oblivion.mp3"
    },
    {
        "title": "Our Adventures",
        "artist": "xander.",
        "album": "Found Memories",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/Our Adventures_Cover (front)_e.jpg",
        "src": "./songs/Our Adventures.mp3"
    },
    {
        "title": "over u",
        "artist": "keshi",
        "album": "over u",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/over u_Cover (front)_e.jpg",
        "src": "./songs/over u.mp3"
    },
    {
        "title": "Raindrops",
        "artist": "Kupla",
        "album": " j'san",
        "track": "Memories",
        "year": "2",
        "img_src": "./songs_images/Raindrops_Cover (front)_e.jpg",
        "src": "./songs/Raindrops.mp3"
    },
    {
        "title": "Riptide",
        "artist": "Poky",
        "album": " Koosen",
        "track": " Sea Flap Flap",
        "year": "Riptide",
        "img_src": "./songs_images/Riptide_Cover (front)_e.jpg",
        "src": "./songs/Riptide.mp3"
    },
    {
        "title": "Sad Vibes",
        "artist": "eyeroze",
        "album": "Sad Vibes",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Sad Vibes_Cover (front)_e.jpg",
        "src": "./songs/Sad Vibes.mp3"
    },
    {
        "title": "Self Affray",
        "artist": "fantompower",
        "album": "infinite (i)",
        "track": "7",
        "year": "",
        "img_src": "./songs_images/Self Affray_Cover (front)_e.jpg",
        "src": "./songs/Self Affray.mp3"
    },
    {
        "title": "Show and Prove",
        "artist": "Es-K",
        "album": "Trust The Process",
        "track": "22",
        "year": "",
        "img_src": "./songs_images/Show and Prove_Cover (front)_e.jpg",
        "src": "./songs/Show and Prove.mp3"
    },
    {
        "title": "sincerely",
        "artist": " yours",
        "album": "Nohidea",
        "track": "osho",
        "year": "2",
        "img_src": "./songs_images/sincerely, yours_Cover (front)_e.jpg",
        "src": "./songs/sincerely.mp3"
    },
    {
        "title": "sleep static",
        "artist": "luvwn",
        "album": "sleep static",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/sleep static_Cover (front)_e.jpg",
        "src": "./songs/sleep static.mp3"
    },
    {
        "title": "Snow & Sand",
        "artist": "j'san",
        "album": " Epektase",
        "track": "1 Am. Study Session",
        "year": "8",
        "img_src": "./songs_images/Snow & Sand_Cover (front)_e.jpg",
        "src": "./songs/Snow & Sand.mp3"
    },
    {
        "title": "Snowman",
        "artist": "WYS",
        "album": "1 Am. Study Session",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Snowman_Cover (front)_e.jpg",
        "src": "./songs/Snowman.mp3"
    },
    {
        "title": "Space Cadet",
        "artist": "Philanthrope",
        "album": " Sleepy Fish",
        "track": "Chillhop Daydreams 2",
        "year": "1",
        "img_src": "./songs_images/Space Cadet_Cover (front)_e.jpg",
        "src": "./songs/Space Cadet.mp3"
    },
    {
        "title": "Stay Awake",
        "artist": "Jennifer Flores",
        "album": " Shiloh Dynasty",
        "track": " LofiCentral",
        "year": "All My Love",
        "img_src": "./songs_images/Stay Awake_Cover (front)_e.jpg",
        "src": "./songs/Stay Awake.mp3"
    },
    {
        "title": "Sunday Afternoon",
        "artist": "Oatmello",
        "album": "Imperfections",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/Sunday Afternoon_Cover (front)_e.jpg",
        "src": "./songs/Sunday Afternoon.mp3"
    },
    {
        "title": "this girl",
        "artist": "Elijah Who",
        "album": "Gentle Boy",
        "track": "4",
        "year": "",
        "img_src": "./songs_images/this girl_Cover (front)_e.jpg",
        "src": "./songs/this girl.mp3"
    },
    {
        "title": "Topaz",
        "artist": "Oatmello",
        "album": " Cloudchord",
        "track": "Diamonds",
        "year": "5",
        "img_src": "./songs_images/Topaz_Cover (front)_e.jpg",
        "src": "./songs/Topaz.mp3"
    },
    {
        "title": "trust u",
        "artist": "Monty Datta",
        "album": " Kehard",
        "track": "trust u",
        "year": "1",
        "img_src": "./songs_images/trust u_Cover (front)_e.jpg",
        "src": "./songs/trust u.mp3"
    },
    {
        "title": "walk but in a garden",
        "artist": "Llusion",
        "album": "walk but in a garden",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/walk but in a garden_Cover (front)_e.jpg",
        "src": "./songs/walk but in a garden.mp3"
    },
    {
        "title": "warm breeze",
        "artist": "chief.",
        "album": "today",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/warm breeze_Cover (front)_e.jpg",
        "src": "./songs/warm breeze.mp3"
    },
    {
        "title": "We Let Go",
        "artist": "fantompower",
        "album": "infinite (i)",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/We Let Go_Cover (front)_e.jpg",
        "src": "./songs/We Let Go.mp3"
    },
    {
        "title": "Why",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "6",
        "year": "",
        "img_src": "./songs_images/Why_Cover (front)_e.jpg",
        "src": "./songs/Why.mp3"
    },
    {
        "title": "Wish I Was Better",
        "artist": "Kina",
        "album": " yaeow",
        "track": "Wish I Was Better",
        "year": "1",
        "img_src": "./songs_images/Wish I Was Better_Cover (front)_e.jpg",
        "src": "./songs/Wish I Was Better.mp3"
    },
    {
        "title": "Wish You Were Mine",
        "artist": "Sarcastic Sounds",
        "album": "1 Am. Study Session",
        "track": "14",
        "year": "",
        "img_src": "./songs_images/Wish You Were Mine_Cover (front)_e.jpg",
        "src": "./songs/Wish You Were Mine.mp3"
    },
    {
        "title": "Wishes",
        "artist": "eyeroze",
        "album": "Heartless",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Wishes_Cover (front)_e.jpg",
        "src": "./songs/Wishes.mp3"
    },
    {
        "title": "With Somebody Else",
        "artist": "Monty Datta",
        "album": " Dhan",
        "track": "With Somebody Else",
        "year": "1",
        "img_src": "./songs_images/With Somebody Else_Cover (front)_e.jpg",
        "src": "./songs/With Somebody Else.mp3"
    },
    {
        "title": "Yesterday",
        "artist": "chief.",
        "album": "Chillhop Daydreams",
        "track": "2",
        "year": "",
        "img_src": "./songs_images/Yesterday_Cover (front)_e.jpg",
        "src": "./songs/Yesterday.mp3"
    },
    {
        "title": "Yoga",
        "artist": "Llusion",
        "album": "Yoga",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Yoga_Cover (front)_e.jpg",
        "src": "./songs/Yoga.mp3"
    },
    {
        "title": "Young Dumb & Broke",
        "artist": "90degrees",
        "album": "Young Dumb & Broke",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Young Dumb & Broke_Cover (front)_e.jpg",
        "src": "./songs/Young Dumb & Broke.mp3"
    },
    {
        "title": "Your Voice",
        "artist": "Monty Datta",
        "album": " Shiloh Dynasty",
        "track": "Your Voice",
        "year": "1",
        "img_src": "./songs_images/Your Voice_Cover (front)_e.jpg",
        "src": "./songs/Your Voice.mp3"
    }
]);

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])

  return (
    <div className="App">
     <div className="weirdShape"></div>  
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;
