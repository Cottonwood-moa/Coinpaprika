# 🤑 Coinpaprika API  
  
[Go to Website](https://coinpaprika-api.netlify.app/)  
  
React.js + Typescript + Recoil + Coinpaprika API  
  
Apex Chart  
![apex](https://user-images.githubusercontent.com/79053495/159847334-310af3a3-915f-4994-917c-3ea61f6102c9.gif)  
  
Theme  
![theme](https://user-images.githubusercontent.com/79053495/159847340-41349516-2db4-4e72-bdea-d2c80e109a46.gif)  
  
Search  
![search](https://user-images.githubusercontent.com/79053495/159847341-ef3346a3-9bba-4f10-a6c2-1d2ebeae4aa6.gif)  
  
404 NOT FOUND  
![20220327151239](https://user-images.githubusercontent.com/79053495/160269139-5a408a4a-6f91-45a4-8121-e62dd0219915.png)  
  
## 📖 Docs

- [React](https://reactjs.org/docs/getting-started.html)
- [React-router](https://reactrouter.com/)
- [React-query](https://react-query.tanstack.com/)
- [React-apexcharts](https://apexcharts.com/docs/react-charts/)
- [Typescript](https://www.typescriptlang.org/)
- [Recoil](https://recoiljs.org/ko/)
- [Styled-components](https://styled-components.com/)
- [Coinpaprika](https://api.coinpaprika.com/)

## 🎯 Goals

- CRA + Typescript.
- React-query를 적극 활용하여 Global state와 서버 비용을 줄이고 실시간으로 변화하는 데이터를 인터페이스에 반영합니다.
- Apexcharts를 활용하여 데이터 시각화 + 다양한 차트를 만들었습니다.
- styled-components + Typescript로 theme 확장성을 높였습니다.
- 비동기 데이터가 아닌 Global state는 recoil로 관리하였습니다.

## 💡 Specs

- React.js
- Typescript
- react-router-dom
- React-apexcharts
- Recoil

### 구성

```json
{
  "name": "coinpaprika",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^17.0.20",
    "@types/react-dom": "^17.0.9",
    "@types/react-helmet": "^6.1.5",
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.24",
    "apexcharts": "^3.33.2",
    "react": "^17.0.2",
    "react-apexcharts": "^1.4.0",
    "react-dom": "^17.0.2",
    "react-helmet": "^6.1.0",
    "react-query": "^3.34.16",
    "react-router-dom": "^6.2.2",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
