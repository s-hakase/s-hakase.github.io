<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title" class="pf-font-weight-light"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-jumbotron src="hero.png"></v-jumbotron>
        <v-layout
          class="pf-avatar-container"
          justify-center
          align-center
          column>
          <figure class="pf-avatar">
            <img class="pf-avatar-image" :src="image" :alt="name">
          </figure>
          <v-card flat class="transparent">
            <h2 class="display-1 ma-3">{{ name }}</h2>
          </v-card>
        </v-layout>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md6 offset-md2>
              <v-card flat class="transparent">
                <h3 class="headline mb-2">プロフィール</h3>
                <p>2012年に電機メーカー系SIerへ新卒で入社。Backbone.js（jQuery）ベースの内製FWを使用したストレージ系製品のコンソール開発、AngularJS（1.4.x）＋D3.js＋TypeScriptを使用した電車の動きを地図上でアニメーション表示するアプリの開発など、フロントエンドを主に担当。</p>
                <p>その後2017年末に無職としての活動を開始。開始当時は主に食事と睡眠を担当。2018年春に「現状をヤバいと全く思わないのがヤバい」と考えを改め就活を決意し、遅れを取り戻すべくフロントエンド技術の学習を始める。Vue.js楽しい。やっぱり何か作るのって楽しい。</p>
              </v-card>
            </v-flex>
            <v-flex xs12 md2>
              <v-card flat class="transparent">
                <h3 class="headline mb-2">コンタクト</h3>
                <v-container grid-list-xs>
                  <v-layout row wrap class="my-0 pf-contacts">
                    <v-flex xs4 md12 class="py-0">
                      <a href="https://twitter.com/wal_hakase"><v-icon large>mdi-twitter</v-icon><span class="grey--text text--darken-4">Twitter</span></a>
                    </v-flex>
                    <v-flex xs4 md12 class="py-0">
                      <a href="https://github.com/s-hakase"><v-icon large>mdi-github-circle</v-icon><span class="grey--text text--darken-4">GitHub</span></a>
                    </v-flex>
                    <v-flex xs4 md12 class="py-0">
                      <a href="mailto:wal.hakase@gmail.com"><v-icon large>mdi-gmail</v-icon><span class="grey--text text--darken-4">Gmail</span></a>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <v-divider></v-divider>
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md8 offset-md2>

              <h2 class="headline mb-2">使用する技術とツール</h2>
              <h3 class="subheading">好き</h3>

              <v-layout row wrap class="pf-lang-and-tools ml-0">
                <figure>
                  <img src="logos/javascript.svg" alt="JavaScript">
                </figure>
                <figure>
                  <img src="logos/vue.svg" alt="Vue.js">
                </figure>
                <figure>
                  <img src="logos/visual-studio-code.svg" alt="VisualStudio Code">
                </figure>
              </v-layout>
            </v-flex>
            <v-flex xs12 md8 offset-md2>

              <h3 class="subheading">使ったことがある</h3>

              <v-layout row wrap class="pf-lang-and-tools ml-0">
                <figure>
                  <img src="logos/angular.svg" alt="AngularJS(1.4.x)">
                </figure>
                <figure>
                  <img src="logos/d3.svg" alt="D3.js">
                </figure>
                <figure>
                  <img src="logos/jquery.svg" alt="jQuery">
                </figure>
                <figure>
                  <img src="logos/typescript.svg" alt="typescript">
                </figure>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <v-divider></v-divider>
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md8 offset-md2>
              <h2 class="headline md-2">最近のアウトプット</h2>

              <v-layout row wrap>
                <v-flex md4>
                  <v-card
                    href="/"
                    class="mx-0"
                    hover>
                    <v-card-media class="white--text" src="outputs/portfolio.png" height="200"></v-card-media>
                    <v-card-title>
                      <v-container fluid class="pa-0">
                        <h3 class="headline mb-2">自己紹介ページ</h3>
                      </v-container>
                      <p>今見ているページ</p>
                      <p>使用技術はNuxt.js + Vuetify</p>
                      <p>速度重視で書いたためNuxt.jsの良さが全く活かされていないのでブラッシュアップ予定</p>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex md4>
                  <v-card
                    href="https://s-hakase.hatenadiary.jp/entry/2018/06/19/184811"
                    class="mx-0"
                    hover>
                    <v-card-media class="white--text" src="outputs/salmonlog.png" height="200"></v-card-media>
                    <v-card-title>
                      <v-container fluid class="pa-0">
                        <h3 class="headline mb-2">Salmon Log</h3>
                      </v-container>
                      <p>スプラトゥーン2のサーモンランの記録を手動でメモできるWebアプリ</p>
                      <p>使用技術はVue.js + Buefy + Firebase (Authentication, Realtime Database)</p>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData ({params}) {
    let {data} = await axios.get('https://api.github.com/users/s-hakase');
    return {
      title: data.login,
      name: data.login,
      image: data.avatar_url,
      github: data.html_url,
      blog: data.blog
    }
  }
}
</script>

<style lang="scss">
.pf-font-weight-light {
  font-weight: 100;
}

$avater-height: 256px;
$half-height: $avater-height / 2;
.pf-avatar-container {
  position: relative;
  transform: translateY(-$half-height);
  margin-bottom: -$half-height;

  .pf-avatar {
    border-radius: 50%;
    height: $avater-height;
    width: $avater-height;
    overflow: hidden;
  }
}
$link-color: #8c9eff;
.pf-contacts {
  a {
    display: block;

    &:hover {
      i, span {
        color: $link-color !important;
      }
    }
  }
}
.pf-lang-and-tools {
  figure {
    margin-right: 0.5rem;
    img {
      max-height: 60px;
      width: auto;
    }
  }
}
v-card-title {
  flex-direction: column;
}
</style>
