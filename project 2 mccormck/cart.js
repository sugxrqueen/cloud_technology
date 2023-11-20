if($_SERVER['PHP_SELF']!="CART FILE"){             
    echo "<h1>Cart Contents</h1>";             
    echo "<div class=\"p2\">";             

    echo "<a href=\"cart.php\">You have ".count($_SESSION['cart'])." total items in your cart.</a>";
}
