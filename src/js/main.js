document.documentElement.className = 'js-enabled';

(function() {
    this.DrumKit = {
        init() {
            //this.keys = document.querySelectorAll(`.key`);
            document.addEventListener('keydown', this.playSound);
            for (let key of document.querySelectorAll(`.key`)) {
                key.addEventListener('transitionend', this.removeTransition);
                key.addEventListener('click', this.playSound);
            }
        },
        playSound(e) {
            this.select = e.type === 'click' ? e.currentTarget.dataset.key : e.key;
            this.audio = document.querySelector(`audio[data-key="${this.select}"]`);
            //const key = document.querySelector(`.key[data-key="${e.key}"]`);
            document.querySelector(`.key[data-key="${this.select}"]`).classList.add('playing');
            if (this.audio) {
                this.audio.play();
                this.audio.currentTime = 0;
            }
            document.body.className = this.select;
        },
        removeTransition(e) {
            e.currentTarget.classList.remove('playing');
            document.body.className = '';
        }

    }
})();
DrumKit.init();