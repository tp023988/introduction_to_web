function function_2()
{
  let h1Text = document.querySelector("h1").innerHTML;
  if(h1Text.includes("C1 352"))
  {
    h1Text = "introduction to web";
  }
  else
  {
    h1Text = h1Text+ " (C1 352)";
  }
  document.querySelector("h1").innerHTML = h1Text;
}
