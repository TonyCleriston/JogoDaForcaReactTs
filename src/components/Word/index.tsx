import "./styles.css";
type WordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
  }
  
  export function Word({
    guessedLetters,
    wordToGuess,
    reveal = false,
  }: WordProps) {
    return (
      <div
       className="letras"
      >
        {wordToGuess.split("").map((letter, index) => (
          <span className="caixa" key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    )
  }