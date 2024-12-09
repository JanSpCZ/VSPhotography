<template>
    <h2>CENÍK</h2>
    <div class="type-wrapper">
        <h3>Svatební</h3>
        <div class="packs-container">
            <div class="column-wrapper">
                <div class="pack">
                    <p>Mini balíček</p>
                </div>
                <div class="price">
                    <p>8000 <span>Kč</span></p>
                </div>
                <div class="description">
                    <ul>
                        <li>Focení svatebního obřadu</li>
                        <li>Max 3 hodiny focení</li>
                        <li>Focení skupinek a novomanželské focení</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="packs-container">
            <div class="column-wrapper">
                <div class="pack">
                    <p>Celodenní balíček</p>
                </div>
                <div class="price">
                    <p>14 000 <span>Kč</span></p>
                </div>
                <div class="description">
                    <ul>
                        <li>Focení celého svatebního dne</li>
                        <li>Budete mít ode mě minimálně 500 zpracovaných a upravených fotek + veškeré nafocené fotky (cca 2000 fotek)</li>
                        <li>První zpracované fotky (cca 30 fotek) hned druhý den, zbytek do 10ti dnů</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="packs-container">
            <div class="column-wrapper">
                <div class="pack">
                    <p>Celodenní balíček PLUS</p>
                </div>
                <div class="price">
                    <p>18 000 <span>Kč</span></p>
                </div>
                <div class="description">
                    <ul>
                        <li>Focení celého svatebního dne + přípravy + příjezd nevěsty</li>
                        <li>Budete mít ode mě minimálně 500 zpracovaných a upravených fotek + veškeré nafocené fotky (cca 2000 fotek)</li>
                        <li>První zpracované fotky (cca 30 fotek) hned druhý den, zbytek do 10ti dnů</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CenikPage"
}


</script>


<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

h2 {
  font-weight: 400;
  font-size: xx-large;
  color: colors.$third;
  padding: 1rem 2rem;
  text-align: center;
}

</style>