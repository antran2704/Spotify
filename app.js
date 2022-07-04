const listBlock = document.querySelector('.list__block--song')
const audio = document.querySelector('#audio')
const controlBtn = document.querySelector('.control__btn')
const controlBtnRandom = document.querySelector('.control__btn-random')
const controlBtnRepeat = document.querySelector('.control__btn-repeat')
const controlWrap = document.querySelector('.control__wrap')
const controlBlockName = document.querySelector('.control__block-name')
const controlBlockInfo = document.querySelector('.control__block-info')
const controlBlockSinger = document.querySelector('.control__block-singer')
const playlistContentToogle = document.querySelector('.playlist-content__toogle')
// progress
const progress = document.querySelector('#progress')
const controlProgressNav = document.querySelector('.control__progress-nav')
const controlProgressNavUpdate = document.querySelector('.control__progress-update')
const volume = document.querySelector('#volume')
const controlVolumeNav = document.querySelector('.control__volume-nav')
const controlVolumeNavUpdate = document.querySelector('.control__volume-update')
// btn
const play = document.querySelector('.control__btn-play')
const playMobile = document.querySelector('.control__toogle-play')
const pauseMobile = document.querySelector('.control__toogle-pause')
const pause = document.querySelector('.control__btn-pause')
const next = document.querySelector('.control__btn-next')
const prev = document.querySelector('.control__btn-prev')
const random = document.querySelector('.control__btn-random')
const repeat = document.querySelector('.control__btn-repeat')
const playlistContentPlay =document.querySelector('.playlist-content__play')
const playlistContentPause =document.querySelector('.playlist-content__pause')
const btnClose = document.querySelector('.control__block-close')

const app = {
    currentIndex: 0,
    isRandom: false,
    isRepeat: false,
    isMoving: false,
    songs : [
        {
            name: 'Anh đã lạc vào remix',
            singer: 'dai meo',
            link: './assets/list-song/anh da lac vao remix.mp3'
        },
        {
            name: 'Váy cưới remix',
            singer: 'dai meo',
            link: './assets/list-song/nam tay.m4a'
        },
        {
            name: 'Có hẹn với thanh xuân',
            singer: 'dai meo',
            link: './assets/list-song/co hen voi thanh xuan.m4a'
        }, 
        {
            name: 'Chạy về khóc với anh remix',
            singer: 'dai meo',
            link: './assets/list-song/chay ve khoc voi anh remix.mp3'
        },
        {
            name: 'yêu đạm sâu remix',
            singer: 'dai meo',
            link: './assets/list-song/yeu dam sau remix.m4a'
        },
        {
            name: 'Đi thôi anh à remix',
            singer: 'dai meo',
            link: './assets/list-song/di thoi anh a remix.mp3'
        },
        {
            name: 'See tình remix',
            singer: 'Hoàng Thùy Linh',
            link: './assets/list-song/see tinh.mp3'
        },
        {
            name: 'Vui lắm em ơi remix',
            singer: 'dai meo',
            link: './assets/list-song/vui lam em oi.m4a'
        },
        {
            name: 'Lưu số em đi remix',
            singer: 'dai meo',
            link: './assets/list-song/luu so em di.m4a'
        },
        {
            name: 'Từ ngày em vẫn bên anh remix',
            singer: 'dai meo',
            link: './assets/list-song/tu ngay em van ben anh.m4a'
        },
        {
            name: 'Tương tư remix',
            singer: 'dai meo',
            link: './assets/list-song/tuong tu.m4a'
        },
        {
            name: 'Hoa trên giấy remix',
            singer: 'dai meo',
            link: './assets/list-song/hoa tren giay.m4a'
        },
    ],
    render: function() {
        const htmls = app.songs.map(function(song,index) {
            return `
                  <li class="list__item" data-index = "${index}">
                  <div class="list__item-wrap list__item-wrap--desc">
                      <div class="list__item-icon-wrap">
                          <span class="list__item-number">${index}</span>
                          <i class="list__item-icon list__item-icon--play fa-solid fa-play"></i>
                          <i class="list__item-icon list__item-icon--pause fa-solid fa-pause"></i>
                      </div>
                      <div class="list__item-desc">
                          <div class="list__item-img-block">
                              <img src="./assets/imgs/img1.jpg" alt="" class="list__item-img">
                          </div>
                          <div class="list__item-info">
                              <p class="list__item-name white-color">
                                  ${song.name}
                              </p>
                              <a href="" class="list__item-singer white-color">${song.singer}</a>
                          </div>
                      </div>
                  </div>
                  <div class="list__item-wrap list__item-wrap--album">
                      <a href="" class="list__item-title text-title">${song.name}</a>
                  </div>
                  <div class="list__item-wrap list__item-wrap--time">
                      <i class="list__item-icon-time fa-regular fa-heart"></i>
                      <p class="list__item-duration">3:05</p>
                      <i class="list__item-icon-time fa-solid fa-ellipsis"></i>
                  </div>
                  </li>
            `
          })
          listBlock.innerHTML = htmls.join('')
    },
    loadCurrentSong: function() {
        audio.src = app.songs[app.currentIndex].link
        controlBlockName.innerText = app.songs[app.currentIndex].name
        controlBlockSinger.innerText = app.songs[app.currentIndex].singer
    }
    ,
    handleEvent: function() {
        play.onclick = function(e) {
            controlBtn.classList.add('playing')
            playlistContentToogle.classList.add('playing')
            audio.play()
        }
        playlistContentPlay.onclick = function(e) {
            controlBtn.classList.add('playing')
            playlistContentToogle.classList.add('playing')
            audio.play()
        }
        playMobile.onclick = function(e) {
            controlWrap.classList.add('playing')
            audio.play()
        }

        pauseMobile.onclick = function(e) {
            controlWrap.classList.remove('playing')
            audio.pause()
        }

        pause.onclick = function(e) {
            controlBtn.classList.remove('playing')
            playlistContentToogle.classList.remove('playing')
            audio.pause()
        }
        playlistContentPause.onclick = function(e) {
            controlBtn.classList.remove('playing')
            playlistContentToogle.classList.remove('playing')
            audio.pause()
        }
        next.onclick = function() {
            if(app.isRandom) {
                app.randomSong()
                app.scrollActiveSong()
            } else {
                app.nextSong()
            } 
           controlBtn.classList.add('playing')
        }

        prev.onclick = function() {
            if(app.isRandom) {
                app.randomSong()
                app.scrollActiveSong()
            } else {
               app.prevSong()
            }
           
           controlBtn.classList.add('playing')
        }

        listBlock.onclick = function(e) {
            const item = e.target.closest('.list__item:not(.active)')
            if(item) {
                app.currentIndex = Number(item.dataset.index)
                controlBtn.classList.add('playing')
                playlistContentToogle.classList.add('playing')
                app.loadCurrentSong()
                app.changeColorName()
                audio.play()
            } 
        }

        random.onclick = function() {
            app.isRandom = !app.isRandom
            controlBtnRandom.classList.toggle('active')
            console.log(app.isRandom)
        }

        repeat.onclick = function() {
            app.isRepeat = !app.isRepeat
            controlBtnRepeat.classList.toggle('active')
        }

       audio.onplay = function() {
           app.changeColorName()
           app.scrollActiveSong()
       }
       audio.onpause = function() {
        var listItemInfo = document.querySelectorAll('.list__item-info')
        listItemInfo.forEach(function(item,index) {
            item.closest('.list__item').classList.remove('playing')
        })

        audio.onended = function() {
            if(app.isRandom) {
                app.randomSong()        
            }
            if(app.isRepeat) {
                audio.play()
            } else {
                app.nextSong()    
            }
        }       
       }

        audio.ontimeupdate = function() {
            if(app.isMoving === false) {
                const percent = (audio.currentTime / audio.duration) * 100 
                progress.value = percent
                controlProgressNavUpdate.style.width = percent + '%'
            }
        } 

        progress.oninput = function(e) {
            app.isMoving = true 
            const seekTime = (e.target.value * audio.duration) / 100
            if(app.isMoving) {
                controlProgressNavUpdate.style.width = ((seekTime / audio.duration) * 100) + '%'
            }
        }  

        progress.onmouseup = function(e) {
            app.isMoving = false
            const seekTime = (e.target.value * audio.duration) / 100
            audio.currentTime = seekTime


        }

        progress.ontouchmove = function(e) {
            app.isMoving = true 
            const seekTime = (e.target.value * audio.duration) / 100
            if(app.isMoving) {
                controlProgressNavUpdate.style.width = ((seekTime / audio.duration) * 100) + '%'
            }
        }

        progress.ontouchend = function(e) {
            app.isMoving = false
            const seekTime = (e.target.value * audio.duration) / 100
            audio.currentTime = seekTime
        }

        volume.oninput = function(e) {
            audio.volume = e.target.value
            controlVolumeNavUpdate.style.width = (e.target.value * 100) + '%'
        }
        
        controlBlockInfo.onclick = function(e) {
            if(e.target.getAttribute('class') === 'control__block-info') {
                e.target.closest('.control__wrap').classList.add('active')
            }

        }

        btnClose.onclick = function(e) {
            e.stopPropagation()
            controlWrap.classList.remove('active')
        }

        
    },
    randomSong: function() {
        do {
            var newIndex = Math.floor(Math.random()*app.songs.length)
            
        } while(newIndex === app.currentIndex)
        app.currentIndex = newIndex
        app.loadCurrentSong()
        app.changeColorName() 
        audio.play()
    },
    nextSong: function() {
        app.currentIndex++
                if(app.currentIndex >= app.songs.length) {
                    app.currentIndex = 0
                }
        app.loadCurrentSong()
        app.changeColorName() 
        app.scrollActiveSong()
        audio.play()
    },
    prevSong: function() {
        app.currentIndex--
        if(app.currentIndex < 0) {
            app.currentIndex = app.songs.length-1
        }
        app.loadCurrentSong()
        app.changeColorName() 
        app.scrollActiveSong()
        audio.play()
    },
    changeColorName: function() {
        var listItemInfo = document.querySelectorAll('.list__item-info')
        listItemInfo.forEach(function(item,index) {
            item.closest('.list__item').classList.remove('playing','active')
            item.classList.remove('playing')
            if(index === app.currentIndex) {
                item.closest('.list__item').classList.add('playing','active')
                item.classList.add('playing')
            }
        })
    },
    scrollActiveSong: function() {
        setTimeout(function() {
            document.querySelector('.list__item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        },500)
    }
    ,
    start: function() {
        this.render()
        this.loadCurrentSong()
        this.handleEvent()
    }
}

app.start()