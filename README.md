## 프로젝트
TypeScript + Express + Sequelize를 활용한 간단한 백엔드 서버 구축

<br/>

## Sequelize 정리

#### 트랜잭션 격리 수준은 설정
```typescript
const { Transaction } = require('sequelize');

await sequelize.transaction({
  isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
}, async (t) => {
  // Your code
});
```
만약 글로벌 단위로 트랜잭션을 설정하고 싶다면 아래와 같이 sequelize 생성 시점에  격리수준 명시
```typescript
const sequelize = new Sequelize('sqlite::memory:', {
  isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
});
```