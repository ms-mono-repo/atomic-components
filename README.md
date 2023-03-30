# atomic-components
재사용성을 위한 모노레포 레포지토리

# 시작 이유
회사 프로젝트 진행 시 비효율적인 컴포넌트 사용을 겪고 재사용 가능한 아톰 컴포넌트의 필요성을 체감하여 프로젝트를 진행한다.

# 목적
빠르고 규격화된 프로젝트 생성을 위한 목적으로 아토믹 컴포넌트를 구성한다.

# 컨벤션(구성중...)
-  보여줘야 하는 데이터는 state는 props로 관리한다. 
-  check box인 경우 컴포넌트 안에서 state를 useEffect로 관리하고있다. 이와 같은 경우에는 안에서 state를 만들어서 관리한다.

# 프로젝트 세팅
```
$ npx create-react-app . --template typescript

//yarn setting
$ npm install -g yarn
$ yarn init
$ yarn install
```

# 아토믹 아이콘을 얻을 수 있는 무료 사이트
- Flaticon: https://www.flaticon.com/
- Font Awesome: https://fontawesome.com/
- Material Design Icons: https://materialdesignicons.com/
- Feather Icons: https://feathericons.com/
- Streamline Icons: https://streamlineicons.com/
- Remix Icon: https://remixicon.com/
- Heroicons: https://heroicons.com/
