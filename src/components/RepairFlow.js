function RepairFlow() {
    const [step, setStep] = useState(0);
    const handleNext = () => setStep((prev) => prev + 1);
  
    switch (step) {
      case 0: return <DiagnosisReport onNext={handleNext} />;
      case 1: return <RepairOption onNext={handleNext} />;
      case 2: return <FixEwaste onNext={handleNext} />;
      case 3: return <TransportAgent onNext={handleNext} />;
      case 4: return <RecycleHub onNext={handleNext} />;
      case 5: return <EarnReward />;
      default: return <Navigate to="/" />;
    }
  }
  