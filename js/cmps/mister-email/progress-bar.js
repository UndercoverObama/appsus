

export default {
    props: ['progress'],
    template:` 
        <section class="progress-bar">
            <div class="progress" :style="{width: progressUnits}">{{progress}}%</div>
        </section>
    `,
    computed: {
        progressUnits() {
            return this.progress + '%'
        }
    }
}