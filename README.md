# Blog by vuepress2
Blog based on vuepress v2

## Visit online
click [here](https://saynop.github.io/)


## Usage Guide
- Place your markdown files in the *blog/detail/* directory.  
- Images referenced in markdown should be placed in the *public/assets/imgs* directory.  
- To embed an image in markdown, use:  
    ```markdown
    ![alt text](/assets/imgs/example.png)
    ```
- If you need to scale an image, you can use HTML directly:
    ```html
    <img src="/assets/imgs/example.png" style="zoom: 50%" />
    ```

## Run & build
```shell
# before run
yarn install
# run
yarn blog:dev
# build
yarn blog:build
```

## Node Version
v16.20.0

## Package

### package list
vuepress = "2.0.0"<br>

pinia<br>

nodejs-jieba<br>

vuepress-plugin-blog2<br>

vuepress-plugin-copy-code2<br>

vuepress-plugin-comment2<br>

vuepress-plugin-search-pro<br>

vuepress-plugin-seo2<br>

vuepress-plugin-sitemap2<br>

### package update

- edit *package.json*

- remove *node_modules directory* and *lock file*

- install package `yarn install` or `npm install`

## Update online
use update shell script
```bash
./update.sh
```
