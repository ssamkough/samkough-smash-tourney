<script setup lang="ts">
/**
 * https://open-api.netlify.com/#tag/submission/operation/listFormSubmissions
 * [
  {
    "id": "string",
    "number": 0,
    "email": "string",
    "name": "string",
    "first_name": "string",
    "last_name": "string",
    "company": "string",
    "summary": "string",
    "body": "string",
    "data": {},
    "created_at": "string",
    "site_url": "string"
  }
]
 */

const config = useRuntimeConfig();
const contenders = useState("contenders");

await callOnce(async () => {
  contenders.value = await $fetch(
    `https://api.netlify.com/api/v1/forms/${config.netlifyFormId}/submissions`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${config.netlifyPersonalAccessToken}` },
    }
  );
});
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <ul>
      <li :key="contender.id" v-for="contender in contenders">
        {{ contender.first_name }}
      </li>
    </ul>
  </div>
</template>
  