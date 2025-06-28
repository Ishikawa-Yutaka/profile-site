// メール送信ボタンの動作を制御するJavaScript
document.addEventListener("DOMContentLoaded", function () {
  // 送信ボタンを取得
  const submitButton = document.querySelector(".btn");

  // フォームを取得
  const contactForm = document.querySelector("#contact form");

  // フォームの送信イベントを監視
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // デフォルトの送信動作を防止

    // 背景色を変更
    submitButton.style.backgroundColor = "#4CAF50";

    // テキストをフェードアウトしてから変更
    submitButton.classList.add("fade-out");

    setTimeout(function () {
      // テキストを変更
      submitButton.textContent = "メールを送信しました ✓";
      // フェードイン
      submitButton.classList.remove("fade-out");
      submitButton.classList.add("fade-in");
    }, 300);

    // ボタンを無効化して再送信を防止
    submitButton.disabled = true;
  });
});
