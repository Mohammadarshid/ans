import React from 'react'

const Profile = () => {
  return (
    <div class="tb">
        <div class="td" id="l-col">
          <div class="l-cnt">
            <div class="cnt-label">
              <i class="l-i" id="l-i-i"></i>
              <span>Intro</span>
              <div class="lb-action"><i class="material-icons">edit</i></div>
            </div>
            <div id="i-box">
              <div id="intro-line">Front-end Engineer</div>
              <div id="u-occ">I love making applications with Angular.</div>
              <div id="u-loc"><i class="material-icons">location_on</i><a href="#">Bengaluru</a>, <a href="#">India</a></div>
            </div>
          </div>
          <div class="l-cnt l-mrg">
            <div class="cnt-label">
              <i class="l-i" id="l-i-p"></i>
              <span>Photos</span>
              <div class="lb-action" id="b-i"><i class="material-icons">keyboard_arrow_down</i></div>
            </div>
            <div id="photos">
              <div class="tb">
                <div class="tr">
                  <div class="td"></div>
                  <div class="td"></div>
                  <div class="td"></div>
                </div>
                <div class="tr">
                  <div class="td"></div>
                  <div class="td"></div>
                  <div class="td"></div>
                </div>
                <div class="tr">
                  <div class="td"></div>
                  <div class="td"></div>
                  <div class="td"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="l-cnt l-mrg">
            <div class="cnt-label">
              <i class="l-i" id="l-i-k"></i>
              <span>Did You Know<i id="k-nm">1</i></span>
            </div>
            <div>
              <div class="q-ad-c">
                <a href="#" class="q-ad">
                  <img src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png"/>
                  <span>My favorite superhero is...</span>
                </a>
              </div>
              <div class="q-ad-c">
                <a href="#" class="q-ad" id="add_q">
                  <i class="material-icons">add</i>
                  <span>Add Answer</span>
                </a>
              </div>
            </div>
          </div>
          <div id="t-box">
            <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Advertising</a> <a href="#">Ad Choices</a> <a href="#">Cookies</a> <span id="t-more">More<i class="material-icons">arrow_drop_down</i></span>
            <div id="cpy-nt">Facebook &copy; <span id="curr-year"></span></div>
          </div>
        </div>
        <div class="td" id="m-col">
          <div class="m-mrg" id="p-tabs">
            <div class="tb">
              <div class="td">
                <div class="tb" id="p-tabs-m">
                  <div class="td active"><i class="material-icons">av_timer</i><span>TIMELINE</span></div>
                  <div class="td"><i class="material-icons">people</i><span>FRIENDS</span></div>
                  <div class="td"><i class="material-icons">photo</i><span>PHOTOS</span></div>
                  <div class="td"><i class="material-icons">explore</i><span>ABOUT</span></div>
                  <div class="td"><i class="material-icons">archive</i><span>ARCHIVE</span></div>
                </div>
              </div>
              <div class="td" id="p-tab-m"><i class="material-icons">keyboard_arrow_down</i></div>
            </div>
          </div>
          <div class="m-mrg" id="composer">
            <div id="c-tabs-cvr">
              <div class="tb" id="c-tabs">
                <div class="td active"><i class="material-icons">subject</i><span>Make Post</span></div>
                <div class="td"><i class="material-icons">camera_enhance</i><span>Photo/Video</span></div>
                <div class="td"><i class="material-icons">videocam</i><span>Live Video</span></div>
                <div class="td"><i class="material-icons">event</i><span>Life Event</span></div>
              </div>
            </div>
            <div id="c-c-main">
              <div class="tb">
                <div class="td" id="p-c-i"><img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" alt="Profile pic"/></div>
                <div class="td" id="c-inp">
                  <input type="text" placeholder="What's on your mind?"/>
                </div>
              </div>
              <div id="insert_emoji"><i class="material-icons">insert_emoticon</i></div>
            </div>
          </div>
          <div>
            <div class="post">
              <div class="tb">
                <a href="#" class="td p-p-pic"><img src="https://imagizer.imageshack.com/img923/2452/zifFKH.jpg" alt="Rajeev's profile pic"/></a>
                <div class="td p-r-hdr">
                  <div class="p-u-info">
                    <a href="#">Rajeev Singh</a> shared a memory with <a href="#">Himalaya Singh</a>
                  </div>
                  <div class="p-dt">
                    <i class="material-icons">calendar_today</i>
                    <span>January 28, 2015</span>
                  </div>
                </div>
                <div class="td p-opt"><i class="material-icons">keyboard_arrow_down</i></div>
              </div>
              <a href="#" class="p-cnt-v">
                <img src="https://imagizer.imageshack.com/img923/8568/6LwtUa.jpg"/>
              </a>
              <div>
                <div class="p-acts">
                  <div class="p-act like"><i class="material-icons">thumb_up_alt</i><span>25</span></div>
                  <div class="p-act comment"><i class="material-icons">comment</i><span>1</span></div>
                  <div class="p-act share"><i class="material-icons">reply</i></div>
                </div>
              </div>
            </div>
          </div>
          <div id="loading"><i class="material-icons">autorenew</i></div>
        </div>
        <div class="td" id="r-col">
          <div id="chat-bar">
            <div id="chat-lb"><i class="material-icons">contacts</i><span>Contacts</span></div>
            <div id="cts">
              <div class="on-ct active">
                <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
              </div>
              <div class="on-ct active">
                <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png"/></a>
              </div>
              <div class="on-ct">
                <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
              </div>
              <div class="on-ct active">
                <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png"/></a>
              </div>
              <div class="on-ct active">
                <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
              </div>
              <div class="on-ct">
                <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
              </div>
              <div class="on-ct">
                <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png"/></a>
              </div>
              <div class="on-ct" id="ct-sett"><i class="material-icons">settings</i></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile
