<?php require './views/global/footer.menu.view.php'; ?>

</main>


<?php require './views/global/copyrightbar.view.php'; ?>
</ion-content>

<link rel="stylesheet" href="/assets/css/custom.css" />
<link rel="stylesheet" href="/assets/css/custom.responsive.css" />


<script type="module">
	import { popoverController } from '/assets/ionic/dist/ionic/index.esm.js';
	window.popoverController = popoverController;
    import { modalController } from '/assets/ionic/dist/ionic/index.esm.js';
    window.modalController = modalController;
</script>

<?php
if (isset($pagestyles)) {
	echo $pagestyles;
}
if (isset($pagescripts)) {
	echo $pagescripts;
}
?>
<link rel="stylesheet" href="/assets/css/hosting.css">
<script src="/assets/js/hosting.js"></script>

</ion-app>
</body>

</html>