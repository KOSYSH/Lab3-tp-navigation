function LecteurAudio() {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Lecteur audio multimédia</h3>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  );
}

export default LecteurAudio;
