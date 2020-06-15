<script>
  {$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: $(".search") },
    headers: {
      Authorization: "KakaoAK 1cac87d729eebd23714fccdb3f521ef4",
    },
  }).done(function (msg) {
    {
      console.log(msg.documents[0].title);
      console.log(msg.documents[0].thumbnail);
      $("p").append("<strong>" + msg.documents[0].title + "</strong>");
      $("p").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    }
  })}
</script>;
