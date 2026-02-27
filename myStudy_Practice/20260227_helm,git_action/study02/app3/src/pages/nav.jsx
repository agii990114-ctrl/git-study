import { useNavigate } from "react-router"
// import { useAuth } from "@/hooks/AuthProvider"
import { useEffect, useState } from "react"
import { api } from '@utils/network.js'
import axios from "axios"
const Nav = () => {
	const loginPage = () => {
		axios.get('http://aiedu.tplinkdns.com:6204').then(res=> console.log(res.data)).catch(err=>console.error(err))

	}
	const nav = useNavigate()
	// const { removeAuth, isLogin, setChangeProfile, profilePath } = useAuth();

	// // 로그인 시 프로필 사진 반영
	// useEffect(() => {
	// 	if (isLogin) {
	// 		api.post("/me")
	// 			.then(res => {
	// 				setChangeProfile(res.data.user.profileNo)
	// 			})
	// 	}
	// }, [isLogin])


	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid position-relative">
				<a className="navbar-brand" style={{ "cursor": "pointer" }} onClick={() => nav("/")}>TEAM2</a>
				<div className="d-flex">
					<img className="border user_pt_nav01 mt-1 object-fit-cover" onClick={() => {}} />

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
						aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse w-100" id="navbarNav">
					<div className="nav_box">
						<ul className="navbar-nav mt-2 me-auto">

							<li className="nav-item">
								<a href="http://aiedu.tplinkdns.com:6204/app1/login/kakao" type="button" className="nav-link" onClick={()=> loginPage()}>로그인</a>
							</li>
							<li className="nav-item">
								<button type="button" className="nav-link" onClick={() => { }}>회원가입</button>
							</li>
							<li className="nav-item">
								<button type="button" className="nav-link" onClick={() => { }} >로그아웃</button>
							</li>
							<li className="nav-item">
								<button type="button" className="nav-link" onClick={() => { }}>회원정보</button>
							</li>

						</ul>
						<img className="border user_pt_nav mt-1 object-fit-cover" onClick={() => { }} />

					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav