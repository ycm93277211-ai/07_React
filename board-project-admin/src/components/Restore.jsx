import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosApi } from "../api/axiosAPI";

export default function Restore() {
  const [withdrawnMember, setWithdrawnMember] = useState(null);
  const [board, setBoard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 탈퇴한 회원 목록 조회
  const getWithdrawnMember = async () => {
    try {
      const resp = await axiosApi.get("/admin/withdrawnMemberList");
      if (resp.status === 200) setWithdrawnMember(resp.data);
    } catch (error) {
      console.error("탈퇴 회원 목록 조회 중 에러 발생: ", error);
    }
  };

  // 삭제된 게시글 목록 조회
  const getBoard = async () => {
    try {
      const resp = await axiosApi.get("/admin/getBoardList");
      if (resp.status === 200) setBoard(resp.data);
    } catch (error) {
      console.error("삭제 게시글 목록 조회 중 에러 발생: ", error);
    }
  };

  // 회원 복구
  const restoreMember = async (member) => {
    if (window.confirm(member.memberNickname + "님을 탈퇴 복구 시키겠습니까?")) {
      try {
        const resp = await axiosApi.put("/admin/restoreMember", { memberNo: member.memberNo });
        if (resp.status === 200) {
          alert("복구 되었습니다.");
          getWithdrawnMember();
        }
      } catch (error) {
        console.error("탈퇴 회원 복구 중 에러 발생: ", error);
      }
    }
  };

  // 게시글 복구 (인자 b 추가)
  const restoreBoard = async (b) => {
    if (window.confirm(b.boardNo + "번 게시글을 복구 시키겠습니까?")) {
      try {
        const resp = await axiosApi.put("/admin/restoreBoard", { boardNo: b.boardNo });
        if (resp.status === 200) {
          alert("복구 되었습니다.");
          getBoard();
        }
      } catch (error) {
        console.error("게시글 복구 중 에러 발생: ", error);
      }
    }
  };

  useEffect(() => {
    getWithdrawnMember();
    getBoard();
  }, []);

  // 두 데이터가 모두 null이 아닐 때 로딩 해제
  useEffect(() => {
    if (withdrawnMember !== null && board !== null) {
      setIsLoading(false);
    }
  }, [withdrawnMember, board]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="menu-box">
      <section className="section-border">
        <h2>탈퇴 회원 복구</h2>
        <h3>탈퇴한 회원 목록</h3>
        {withdrawnMember.length === 0 ? (
          <p>탈퇴한 회원이 없습니다</p>
        ) : (
          withdrawnMember.map((member, index) => (
            <ul className="ul-board" key={"member-" + index}>
              <li>회원 번호 : {member.memberNo}</li>
              <li>회원 이메일 : {member.memberEmail}</li>
              <li>회원 닉네임 : {member.memberNickname}</li>
              <button className="restoreBtn" onClick={() => restoreMember(member)}>복구</button>
            </ul>
          ))
        )}
      </section>

      <section className="section-border">
        <h2>삭제 게시글 복구</h2>
        <h3>삭제된 게시글 목록</h3>
        {board.length === 0 ? (
          <p>삭제한 게시글이 없습니다</p>
        ) : (
          board.map((item, index) => (
            <ul className="ul-board" key={"board-" + index}>
              <li>게시글 번호 : {item.boardNo}</li>
              <li>게시글 제목 : {item.boardTitle}</li>
              <li>게시글 내용 : {item.boardContent}</li>
              <button className="restoreBtn" onClick={() => restoreBoard(item)}>복구</button>
            </ul>
          ))
        )}
      </section>
    </div>
  );
}