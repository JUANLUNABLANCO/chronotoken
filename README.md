# ChronoToken

this project generated manually with a litle server index.js in Nodejs

1. Run in development `npm run nodeDev`, running in port 5000

1. Run in production `npm run nodeProd`, running in port ????

# Sever-Droplet-Information

`ip` 188.166.0.85
`name` SERVER-CHRONOTOKEN

    ## Access ssh, access idrsa_key.pub
    > ssh root@188.166.0.85

    ## update system
    > sudo apt update
    > sudo apt upgrade

    ## install nvm
    > sudo apt install curl
    > curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    > source ~/.profile

    ## install node with nvm (both: local & server)
    ] nvm install node      // v16.9.1 actually 20210921
    ] nvm install 14.17.6   // version in my pc
    ] nvm ls
    ] nvm ls-remote
    ] nvm use 14.17.6      // for example

    ## git configuration local
    > git init -y           // inicializa git y abre el package.json
    > touch .gitignore
    > echo "node_modules" >> .gitignore

    ## after coding some project
    > git status
    > git add ./
    > git commit -m "JuanLuna@master: first commit"
    > git push origin master

    ## git configuracion server
    $ git config --global user.name "gotht3way"
    $ git config --global user.email gotth3way.apis@gmail.com
    $ git config --list
    $ mkdir /home/<username>/chronotoken.com
    $ cd /home/<username>/chronotoken.com
    $ git init
    $ git remote add https://gotth3way@bitbucket.org/gotth3way/projectexample_chronotoken.git
    $ git pull origin master