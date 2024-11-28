<script>
	import { goto } from '$app/navigation';

	let count = 0;
	const data = [
		{ id: 0, name: '김밥', price: '4000', menu_type: '한식', created_at: '2022-01-11' },
		{ id: 1, name: '불고기', price: '12000', menu_type: '한식', created_at: '2022-11-10' },
		{ id: 2, name: '김치', price: '12000', menu_type: '한식', created_at: '2022-11-10' },
		{ id: 3, name: '밥', price: '12000', menu_type: '한식', created_at: '2022-11-10' },
		{ id: 4, name: '햄버거', price: '12000', menu_type: '한식', created_at: '2022-11-10' }
	];

	const ddabongClickHandler = () => {
		alert('맛점하세요 :)');
	};

	const skipClickHandler = () => {
		const isLast = count === data.length - 1;
		count = isLast ? 0 : count + 1;
		if (isLast) {
			alert('먹고 싶은 메뉴를 다시 돌려보세요 :(');
			goto('/');
		}
	};
</script>

<div class="w-100% h-screen flex flex-col items-center">
	<div class="w-80 h-5/6 bg-primary p-5 mt-8 rounded-lg">
		<h1 class="text-white text-2xl pb-2.5 font-bold">{data[count].name}</h1>
		<img src="/kimbap.jpg" alt="recommand menu" width="283" height="183" class="object-cover" />
		<p class="text-gray pt-8 line-clamp-5">{data[count].price}원</p>
	</div>
	<div class="flex h-20">
		<button on:click={ddabongClickHandler}>
			<img src="/blue-hand.png" alt="good" width="150" />
		</button>
		<button on:click={skipClickHandler}>
			<img src="/red-hand.png" alt="skip" width="150" />
		</button>
	</div>
</div>
