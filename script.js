// Phone Number for WhatsApp Hug Alerts
const MY_PHONE_NUMBER = '2347048091802';

// Initialize Lucide Icons
lucide.createIcons();

// ===== MUSIC HELPERS =====
function setMusicStatus(text, spinning) {
    const status = document.getElementById('music-status-text');
    const icon = document.getElementById('music-icon');
    if (status) status.innerText = text;
    if (icon) {
        if (spinning) {
            icon.classList.add('animate-spin-slow');
        } else {
            icon.classList.remove('animate-spin-slow');
        }
    }
}

// ===== YOUR OWN PHOTOS & VIDEOS =====
const photoFiles = [
    { file: 'img1.jpg',  title: '' },
    { file: 'img2.jpg',  title: '' },
    { file: 'img3.jpeg', title: '' },
    { file: 'img4.jpeg', title: '' },
    { file: 'img5.jpeg', title: '' },
    { file: 'img6.jpeg', title: '' },
    { file: 'img7.jpeg', title: '' },
    { file: 'img8.jpeg', title: '' },
    { file: 'img9.jpeg', title: '' },
    { file: 'img10.jpeg', title: '' },
    { file: 'img11.jpeg', title: '' },
    { file: 'img12.jpeg', title: '' }
];

const videoFiles = [
    { file: 'video1.mp4', title: '' },
    { file: 'video2.mp4', title: '' },
    { file: 'video3.mp4', title: '' },
    { file: 'video4.mp4', title: '' },
    { file: 'video5.mp4', title: '' },
    { file: 'video6.mp4', title: '' },
    { file: 'img7.mp4', title: '7' }
];

// Builds the gallery list from the two lists above (don't edit this part)
const mediaItems = [
    ...photoFiles.map(p => ({ type: 'photo', url: p.file, title: p.title })),
    ...videoFiles.map((v, index) => ({ type: 'video', url: v.file, title: v.title, autoplay: index === 0 }))
];

// REASONS WHY FEMI LOVES DAMI (Generates randomly from your letters!)
const reasons = [
    "With you, there's never pressure from you... just comfort, honesty, and peace.",
    "The way you love me genuinely and fully means a lot to me 🫂",
    "You make it easy to care, easy to stay, easy to love.",
    "Your smile... God. You have the most beautiful smile I've ever seen.",
    "I'm not with you for the version of us coming later, I'm with you for right now, exactly as we are.",
    "I want you in my future, Dami. I want you in the big things and the small things.",
    "I'm obsessed with you, my Dami 🌚",
    "Seeing you happy has become one of my favorite things in life.",
    "You're amazing, real, kind, stubborn and so deeply, extremely beautiful!!",
    "I want to be the person you call first and the person you come home to.",
    "Your definition of cute is 🚶🏿...",
    "I want a front row seat to your whole life, right there cheering you on active like madd!!",
    "I love you 3000, Adedoyin."
];

// LETTERS DATA (Customized directly from Femi)
const letters = [
    {
        title: "Open When You Miss Me 🩶",
        body: "My sweet Adedoyin,\n\nWhenever you miss me, I need you to know—really know—that I'm not going anywhere. Not even close.\n\nI can't picture my life without you in it. I want you in my future, Dami—in the big things, the small things, the late nights, the random conversations, and that NYC trip 🌚.\n\nWhenever I'm not right by your side, remember that I'm always thinking about you, my favorite person.\n\nFrom your personal bot,\n- Femi"
    },
    {
        title: "Open When You Have a Long Day 🌿",
        body: "Hey my love,\n\nTake a deep breath and unwind. I admire you so much and I'm always... ALWAYS proud of you, old woman 🌚.\n\nYou work so hard and care so deeply for everyone around you. Soften your shoulders, relax your mind, and remember that with me, there's never pressure—just comfort, honesty, and peace.\n\nI'm sending you the biggest hug right now.\n\n- Femi"
    },
    {
        title: "Open When We Have a Fight",
        body: "Dami!!\n\n I want you to know i love love you, i do not mean any mean thing i say to you i actuually do love you  Dami 😭!\n\nI just opened this letter to tell you that even when we have a fight, you are still completely perfect to me. Every little thing that makes you who you are is exactly what I fell in love with and  i'm sorry .\n\nI love love you, always.\n\nFrom your personal bot,\n- Femi"
    }
];

// RENDER MEDIA GALLERY
function renderMedia(filter = 'all') {
    const container = document.getElementById('media-grid');
    container.innerHTML = '';

    const filteredItems = mediaItems.filter(item => filter === 'all' || item.type === filter);

    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        
        if (item.type === 'photo') {
            const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];
            const tiltClass = tilts[index % tilts.length];
            
            card.className = `polaroid-frame p-3 rounded-2xl transform ${tiltClass} transition duration-300`;
            card.innerHTML = `
                <div class="w-full aspect-[4/3] bg-grey-200 rounded-xl overflow-hidden mb-3">
                    <img src="${item.url}" alt="${item.title || 'Memory photo'}" loading="lazy" class="w-full h-full object-contain">
                </div>
                <p class="font-handwriting text-center text-grey-800 text-lg font-semibold">${item.title}</p>
            `;
        } else {
            card.className = 'glass-card p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between';
            card.innerHTML = `
                <div class="w-full aspect-[4/3] bg-black rounded-xl overflow-hidden mb-3 relative group">
                    <video ${item.autoplay ? 'id="first-gallery-video"' : ''} src="${item.url}" controls playsinline preload="metadata" class="w-full h-full object-contain"></video>
                </div>
                <div class="flex items-center justify-between px-2">
                    <p class="font-medium text-slate-200 text-sm">${item.title}</p>
                    <span class="text-[10px] py-0.5 px-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700">Video</span>
                </div>
            `;
            const video = card.querySelector('video');
            video.addEventListener('ended', () => {
                const videos = Array.from(document.querySelectorAll('#media-grid video'));
                const nextVideo = videos[videos.indexOf(video) + 1];
                if (nextVideo) {
                    nextVideo.play().catch(error => {
                        console.error('Next video playback error:', error);
                    });
                }
            });
        }

        container.appendChild(card);
    });
}

// FILTER TABS
function filterMedia(type) {
    document.querySelectorAll('.media-tab').forEach(tab => {
        tab.classList.remove('bg-slate-700', 'text-slate-100', 'font-semibold');
        tab.classList.add('text-grey-400');
    });
    document.getElementById(`tab-${type}`).classList.add('bg-slate-700', 'text-slate-100', 'font-semibold');
    renderMedia(type);
}

// OPEN CURTAIN + START THE SONG FROM THE BEGINNING
function openCurtain() {
    const audio = document.getElementById('bg-music');
    const firstVideo = document.getElementById('first-gallery-video');

    if (audio) {
        audio.currentTime = 0;
        audio.volume = 1.0;
        audio.muted = false;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setMusicStatus('Frank Ocean 🎧', true);
            }).catch(error => {
                console.error('Audio playback error:', error);
                // If the file itself is missing, the error listener below shows that message.
                if (!audio.error) {
                    setMusicStatus('Tap the disc to play', false);
                }
            });
        }
    }

    if (firstVideo) {
        firstVideo.play().catch(error => {
            console.error('Video playback error:', error);
        });
    }

    const curtain = document.getElementById('entrance-curtain');
    const mainContent = document.getElementById('main-content');

    curtain.classList.add('opacity-0');
    setTimeout(() => {
        curtain.style.display = 'none';
        mainContent.classList.remove('opacity-0');
    }, 1000);
}

// TOGGLE MUSIC PLAY/PAUSE
function toggleMusic() {
    const audio = document.getElementById('bg-music');

    if (audio.paused) {
        audio.play().then(() => {
            setMusicStatus('Frank Ocean 🎧', true);
        }).catch(error => {
            console.error('Audio playback error:', error);
        });
    } else {
        audio.pause();
        setMusicStatus('Paused', false);
    }
}

// RANDOM REASONS GENERATOR
function nextReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const textEl = document.getElementById('reason-text');
    textEl.style.opacity = '0';
    setTimeout(() => {
        textEl.innerText = `"${reasons[randomIndex]}"`;
        textEl.style.opacity = '1';
    }, 200);
}

// HUG ACTION & WHATSAPP TRIGGER
let hugCount = parseInt(localStorage.getItem('dami_hug_count') || '0');
let hugLogs = JSON.parse(localStorage.getItem('dami_hug_logs') || '[]');

function updateHugUI() {
    document.getElementById('total-hug-count').innerText = hugCount;
    const container = document.getElementById('hug-log-container');
    const noHugs = document.getElementById('no-hugs-yet');

    if (hugLogs.length > 0 && noHugs) {
        noHugs.remove();
    }

    container.innerHTML = hugLogs.slice().reverse().map(log => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs text-slate-200">
            <span class="flex items-center gap-2">
                <i data-lucide="heart" class="w-4 h-4 text-slate-200 fill-slate-200"></i>
                <span>Dami sent a hug to Femi 🤗</span>
            </span>
            <span class="text-[10px] text-slate-400 font-mono">${log.time}</span>
        </div>
    `).join('');
    
    lucide.createIcons();
}

function sendHug() {
    confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#cbd5e1', '#e2e8f0', '#94a3b8', '#ffffff', '#f43f5e']
    });

    hugCount++;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (' + now.toLocaleDateString() + ')';
    hugLogs.push({ time: timeStr });

    localStorage.setItem('dami_hug_count', hugCount.toString());
    localStorage.setItem('dami_hug_logs', JSON.stringify(hugLogs));
    updateHugUI();

    const encodedMsg = encodeURIComponent("Dami sends hugs to Femi! 🩶🤗");
    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodedMsg}`;
    document.getElementById('whatsapp-direct-link').href = whatsappUrl;

    const modal = document.getElementById('hug-modal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeHugModal() {
    const modal = document.getElementById('hug-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// LETTER MODAL LOGIC
function openLetter(index) {
    const letter = letters[index];
    document.getElementById('modal-letter-title').innerText = letter.title;
    document.getElementById('modal-letter-body').innerText = letter.body;

    const modal = document.getElementById('letter-modal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeLetterModal() {
    const modal = document.getElementById('letter-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// ON LOAD INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    // Update the tab counts and gallery subtitle automatically
    const photoCount = mediaItems.filter(i => i.type === 'photo').length;
    const videoCount = mediaItems.filter(i => i.type === 'video').length;
    document.getElementById('tab-all').innerText = `All (${mediaItems.length})`;
    document.getElementById('tab-photo').innerText = `Photos (${photoCount})`;
    document.getElementById('tab-video').innerText = `Videos (${videoCount})`;
    const subtitle = document.querySelector('#gallery p.mt-1');
    if (subtitle) {
        subtitle.innerText = `${photoCount} photos & ${videoCount} videos of our favorite moments together`;
    }

    renderMedia('all');
    updateHugUI();

    // If the mp3 can't be loaded, show exactly why in the player
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.addEventListener('error', () => {
            const code = audio.error ? audio.error.code : 0;
            if (code === 4) {
                setMusicStatus('Song file not found', false);
            } else if (code === 3) {
                setMusicStatus('Song file is damaged', false);
            } else {
                setMusicStatus('Song failed to load', false);
            }
            console.error('Audio error code:', code, 'Source:', audio.src);
        });
    }
});