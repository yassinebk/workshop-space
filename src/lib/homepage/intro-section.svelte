<script lang="ts"></script>

<section class="section-outer-container">
	<div class="main-content">
		<div class="v-spacer-md" />
		<div class="v-spacer-md" />
		<h1 class="heading-1">Welcome to the <span>full stack workshop </span></h1>
		<div class="v-spacer-sm" />
		<div style="max-width:700px">
			<h4>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis voluptatem officia enim
				sapiente pariatur aspernatur expedita veniam!
			</h4>
		</div>
		<div class="v-spacer-lg" />
		<div class="v-spacer-lg" />
		<h1 class="presented-by">Presented by</h1>
		<div class="v-spacer-md" />
		<div class="partnership-section">
			<div class="pill-container devini-pill ">
				<div class="avatar" style="transform:scale(0.7);border:1px solid yellow;">
					<img
						src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/279176871_100677889308577_4000524789757222516_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mTt310_I6pEAX8SzIpz&tn=1hXV2nowkpqYKLAr&_nc_ht=scontent.ftun2-2.fna&oh=00_AT81pBsiBspemp8vFUAIp_DgjCjebQ1JWWQqi7aRNhxUKA&oe=63030DE3"
						alt="Devini "
					/>
				</div>
				<h3>Devini</h3>
			</div>
			<div class="h-spacer-md" />
			<h1>&</h1>
			<div class="h-spacer-md" />
			<div class="pill-container">
				<div class="avatar" style="transform:scale(0.7);">
					<img
						src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-1/278773169_7398402573565927_3377744225617429316_n.jpg?stp=c10.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8PArsAtzbzgAX-Vjdcn&_nc_ht=scontent.ftun2-2.fna&oh=00_AT8zt_NxrPt7iD9A656SaKzkuJ6jPPop8kTRCJNxSTnCVg&oe=63039EDA"
						alt="yassine belkhadem "
					/>
				</div>
				<h3>Yassine Belkhadem</h3>
			</div>
		</div>
	</div>
</section>

<style>
	:root {
	}
	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.section-outer-container {
		background-color: #b7d8eb;
		border-radius: 30px;
		/* width: 95vw; */
		margin: 1rem auto;
		color: var(--main-black);
		padding: 2rem 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.heading-1 {
		font-size: 2.5rem;
		font-weight: bold;
		color: #1a2328;
		color: var(--main-black);
	}

	.pill-container {
		display: flex;
		padding-right: 10px;
		width: fit-content;
		align-items: center;
		border-radius: 50px;
		background-color: white;
		border: 1px solid var(--main-black);
		font-size: 0.8rem;
	}

	.partnership-section {
		display: flex;
		align-items: center;
	}

	.devini-pill {
		background-color: #1a2328;
		color: white;
		min-width: 232px;
	}

	.devini-pill {
		color: yellow;
		font-size: 1.24rem;
	}

	h4 {
		font-weight: 400;
	}

	.presented-by {
		color: var(--main-black);
	}
</style>
