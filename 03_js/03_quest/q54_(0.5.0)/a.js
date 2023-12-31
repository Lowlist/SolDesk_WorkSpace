/************************************ 
 *                                  *
 *            rpg game              *
 *           ver (0.1.0)            *
 *                                  *
 ************************************/

/* 
- 업데이트 내용 v(0.1.0)    

- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)

- 업데이트 내용 v(0.2.0)
- 전투와 전투시작 메세지 출력

- 업데이트 내용 v(0.3.0)
- 공격력을 해당 공격력 수치의 값에서 랜덤으로 나오도록 수정하였습니다.

- 업데이트 내용 v(0.4.0)
- 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
- 케릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
- 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.

- 업데이트 내용 v(0.5.0)
- 케릭터 정보 출력을 한꺼번에 출력되도록 수정하였습니다. ex [엠피스(50/100)] [오크전사(30/100)]
- 클래스 선언을 별도의 파일로 옮기고 연결했습니다.
*/


let orc = new Monster("오크",100,100,15);
let elf = new Character("엘프주민",80,80,5);

elf.info();
orc.info();

fightInfo(elf,orc);

hr()
dw("전투결과");

elf.info();
orc.info();

