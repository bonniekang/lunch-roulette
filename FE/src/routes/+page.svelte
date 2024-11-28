<script lang="ts">
	import { goto } from '$app/navigation';

	import LoadingPage from '../routes/loading/+page.svelte';

	type State = { place: string; category: string };

	let isLoading: Boolean = false;
	let state: State = { place: '', category: '' };

	type Action =
		| { type: 'UpdatePlaceValue'; payload: string }
		| { type: 'UpdateCategoryValue'; payload: string };

	function updateState(action: Action) {
		if (action.type === 'UpdatePlaceValue') {
			state = { ...state, place: action.payload };
		} else if (action.type === 'UpdateCategoryValue') {
			state = { ...state, category: action.payload };
		}
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		const { name, value } = target;

		if (name === 'place') {
			updateState({ type: 'UpdatePlaceValue', payload: value });
		} else if (name === 'category') {
			updateState({ type: 'UpdateCategoryValue', payload: value });
		}
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log(state);
		isLoading = true;

		setTimeout(() => {
			isLoading = false; // Simulate finishing the action
			// Redirect or show result
			goto('/result'); // indicates a redirect
		}, 2000);
	}
</script>

{#if isLoading}
	<LoadingPage />
{:else}
	<div class="bg-primary h-screen flex flex-col justify-center items-center">
		<!-- Header Image -->
		<img src="/MainHeaderImg.svg" alt="Header" width="276" height="255" />

		<div class="flex justify-center">
			<form class="flex flex-col w-64" on:submit={handleSubmit}>
				<!-- Place Selection -->
				<label class="text-base pb-1" for="location">어디서 드시나요</label>
				<select
					class="mb-8 h-12 rounded-md pl-2.5"
					name="place"
					bind:value={state.place}
					required
					on:change={handleChange}
				>
					<option value="">장소 선택하기</option>
					<option value="배달">배달</option>
					<option value="외식">외식</option>
				</select>

				<!-- Category Selection -->
				<label class="text-base pb-1" for="foodCategory">음식분류</label>
				<select
					class="mb-8 h-12 rounded-md pl-2.5"
					name="category"
					bind:value={state.category}
					required
					on:change={handleChange}
				>
					<option value="">음식종류 선택하기</option>
					<option value="한식">한식</option>
					<option value="중식">중식</option>
					<option value="일식">일식</option>
					<option value="양식">양식</option>
					<option value="샐러드">샐러드</option>
				</select>

				<!-- Submit Button -->
				<button type="submit">
					<img src="/MainBottomBtnImg.png" alt="Submit" width="219" height="219" />
				</button>
			</form>
		</div>
	</div>
{/if}

<style>
	.bg-primary {
		background-color: #f5f5f5;
	}
</style>
