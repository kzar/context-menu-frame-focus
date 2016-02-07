var frameName = window == window.top ? "Top level frame" : "A child frame";

document.addEventListener("mousemove", function (event)
{
  console.log("Mouse moved in", frameName);
});
