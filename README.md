get: axios.get(url, [, config])
delete: axios.delete(url, [, config])
put: axios.put(url, data[, config])
post: axios.post(url, data[, config])

get, delete은 data가 config객체로 들어간다

ex)
fetcher(...{params: userId})로 보내면
http://localhost:3000/messages?userId=40
백엔드에서 req.query.userId, query: { userId }로 userId를 꺼내면 된다

graphql-request: api호출 라이브러리
graphql-tag: graphql언어를 javascript로 치환
react-query: graphql관리

stale: 오래된 것, 미리 받아놓은 정보

ssr으로 받아온 정보와 새로 받아온 정보를 비교
바뀐게 없으면 캐쉬된 정보를 쓰고 바뀐게 있다면 바뀐 부분을 변경
