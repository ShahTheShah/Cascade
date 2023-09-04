<script lang="ts">
    import Container from "$component/Container.svelte";
    import Button from "$tag/Button.svelte";
    import Title from "$tag/Title.svelte";

    import Svelecte from "svelecte";

    let options = [
            {
                value: "0",
                text: "Рубашки",
            },
            {
                value: "1",
                text: "Майки",
            },
            {
                value: "2",
                text: "Штаны",
            },
            {
                value: "3",
                text: "Нижнее бельё",
            },
            {
                value: "4",
                text: "Перчатки",
            },
        ],
        selection: null = null,
        value: string;

    let specifications = [
        "Бренд",
        "Вид застежки",
        "Вырез горловины",
        "Назначение",
        "Особенности модели",
        "Пол",
        "Рисунок",
        "Тип карманов",
        "Тип ростовки",
        "Тип рукава",
    ];
</script>

<svelte:head>
    <title>Новый продукт</title>
</svelte:head>

<form class="newProduct" on:click={(__event__) => __event__.preventDefault()}>
    <Container class="newProduct-container">
        <section class="newProduct-section">
            <div class="newProduct-status">
                <p>Характеристики</p>
                <p>    Наименование</p>
                <p>Описание</p>
                <p>Цвета</p>
            </div>
            <Button type="submit">Создать</Button>
        </section>
        <section class="newProduct-section">
            <div class="newProduct-specifications">
                <Title level={1} class="newProduct_title">Характеристики</Title>
                <div>
                    <p>Предмет</p>
                    <Svelecte
                        {options}
                        inputId="country"
                        bind:readSelection={selection}
                        bind:value
                        placeholder="Выберите продукт"
                    />
                </div>
                <div>
                    <p>Упаковка</p>
                    <span>
                        <i>
                            <b>Высота упаковки, см</b>
                            <input type="text" />
                        </i>
                        <i>
                            <b>Длина упаковки, см</b>
                            <input type="text" />
                        </i>
                        <i>
                            <b>Ширина упаковки, см</b>
                            <input type="text" />
                        </i>
                    </span>
                </div>
                {#each specifications as specification}
                    <div>
                        <p>{specification}</p>
                        <input type="text" />
                    </div>
                {/each}
            </div>
        </section>
        <section class="newProduct-section">
            <div class="newProduct-prompt">
                <p>Эти характеристики часто ищут покупатели. Заполните их, чтобы увеличить количество заказов.</p>
            </div>
        </section>
    </Container>
</form>

<style lang="scss">
    $class: ".newProduct";
    #{$class} {
        position: fixed;
        top: 61px;
        left: 0;
        padding: 24px 0;
        width: 100vw;
        height: calc(100vh - 61px);
        overflow-y: scroll;

        :global(.svelecte) {
            width: 100%;
        }
        :global(#{&}_title) {
            font-size: 20px;
            font-weight: 500;
        }
        :global(#{&}-container) {
            padding: 0 60px;
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            gap: 24px;
        }
        :global(.button) {
            padding: 12px 24px;
            border-radius: 5px;
            background-color: $primary;
            color: white;
        }
        &-section {
            display: flex;
            flex-direction: column;
            gap: 24px;
            div {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                height: fit-content;
            }
        }
        &-specifications {
            div {
                margin-bottom: 20px;
                // margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                gap: 24px;

                p {
                    display: block;
                    font-size: 14px;
                    width: 200px;
                }

                span {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    align-items: center;

                    i {
                        b {
                            display: block;
                            margin-bottom: 4px;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                        }
                    }
                }
            }
            input {
                padding: 10px 5px;
                width: 100%;
                border-radius: 3px;
                font-size: 18px;
                border: 1px solid $gray_400;
                outline: none;

                &:hover {
                    border: 1px solid $primary;
                }
                &:focus {
                    border: 1px solid $primary;
                    box-shadow: 0 0 10px rgba($primary, .2);
                }
            }
        }
    }
</style>
