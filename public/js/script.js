
        const player = document.getElementsByClassName('.player')
        const video = player.querySelector('.viewner');
        const progress = player.querySelector('.progress');
        const progressBar = player.querySelector('.progress__filled');
        const toggle = player.querySelector('.toggle');
        const skipButtons = player.querySelectorAll('[data-skip]');
        const ranges = player.querySelectorAll('.player__slider');
        const copyText = document.getElementById('copiar');
        const checkbox = document.getElementById('checkbox');

        const fileVideo = document.getElementById('iframefile').files[0];
        const produto = document.getElementById('urlProduct');
        const tempo = document.getElementById('tempo');

        const result = document.getElementById('result');

            function sweetalertclick() {
                new Swal(
                    'Parabéns!',
                    'Seu vídeo customizado está pronto!',
                    'success'
    
                )
            }


            /* BUILD OUT FUNCTIONS */

            function togglePlay() {

            const method = video.paused ? 'play' : 'pause';

            video[method]();

            }

            function toggleMute() {
            if(video.muted) {
                video.muted = false;
            }
            else {
                video.muted = true
            }
            }

            function updateButton() {
            const icon = this.paused ? '▶' : 'Pause';
            console.log(icon);
            toggle.textContent = icon; 
            }

            function skip() {
            console.log(this.dataset);
            video.currentTime += parseFloat(this.dataset.skip);
            }

            function handleRangeUpdate() {
            video[this.name] = this.value;
            console.log(this.name); 
            console.log(this.value);
            bolinhaRange.style.backgroundColor = `${colorInput.value}`
            }

            function handleProgress() {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.style.flexBasis = `${percent}%`;
            progressBar.style.backgroundColor = `${colorInput.value}`
            }

            function scrub(e) {
            const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

            video.currentTime = scrubTime;
            console.log(e);
            }

    
            document.querySelectorAll('input[type=color]').forEach(function (picker) {
                
                var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
                colorArea = document.createElement('span');

                colorArea.innerHTML = picker.value;
                targetLabel.appendChild(colorArea);

                picker.addEventListener('change', function() {
                    colorArea.innerHTML = picker.value;
                    targetLabel.appendChild(colorArea);
                })

            })

    
    
            console.log(sweetalertclick)
    
            
            
            const inputElement = document.querySelector('input[type=file]');

            const pond = FilePond.create(inputElement, {
                imageResizeTargetWidth:256,
            
                onaddfile:(err,fileItem)=>{
                    console.log(err, fileItem.getMetadata('resize'))
                }
            
            
            })


            progressBar.style.backgroundColor = picker.value;

            /* GET OUR ELEMENTS */


        




            /* HOOK UP THE EVENT LISTENERS */
            video.addEventListener('click', togglePlay);
            video.addEventListener('play', updateButton);
            video.addEventListener('pause', updateButton);
            video.addEventListener('timeupdate', handleProgress);
            video.addEventListener('click', toggleMute);

            toggle.addEventListener('click', togglePlay);
            skipButtons.forEach(button => button.addEventListener('click', skip));
            ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
            ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

            let mousedown = false;

            progress.addEventListener('click', scrub);
            progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
            progress.addEventListener('mousedown', () => mousedown = true);
            progress.addEventListener('mouseup', () => mousedown = false)

            colorInput.value(localStorage['setcolor']);
            colorInput.onchange(() => {
                var colorvalue = this.value;
                localStorage.setItem('setcolor', colorvalue);

            })


            bolinhaRange.value(localStorage['setcolor']);
            bolinhaRange.onchange(() => {
                var colorvalue = this.value;
                localStorage.setItem('setcolor', colorvalue);

            })
