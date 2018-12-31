<template>
	<div class="home">
		<Manufacture/>
	</div>
</template>

<script>
// @ is an alias to /src
import Manufacture from "@/components/Homeworld/Manufacture.vue"

export default {
	name: "homeworld",
	components: {
		Manufacture
	}
}
</script>