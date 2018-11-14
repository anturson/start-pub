export default function getBaseUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const useMockApi = urlParams.get('useMockApi');
  return useMockApi ? 'http://localhost:3001/' : 'https://sleepy-dusk-61958.herokuapp.com/';
}
